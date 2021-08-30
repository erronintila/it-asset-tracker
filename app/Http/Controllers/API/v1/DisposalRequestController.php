<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\DisposalRequest\DisposalRequestStoreRequest;
use App\Http\Requests\DisposalRequest\DisposalRequestUpdateRequest;
use App\Http\Resources\DisposalRequestResource;
use App\Models\DisposalRequest;
use App\Models\Transaction;
use App\Models\TransactionType;
use App\Models\User;
use App\Traits\HttpResponseMessage;
use App\Traits\SendUserNotification;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class DisposalRequestController extends Controller
{
    use HttpResponseMessage, SendUserNotification;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $search = request('search') ?? "";
        $sortBy = request('sortBy') ?? "code";
        $sortType = request('sortType') ?? "asc";
        $itemsPerPage = request('itemsPerPage') ?? 10;

        $transactions = Transaction::search($search)
            ->with(['user', 'transactionable'])
            ->where('transactionable_type', 'App\Models\DisposalRequest')
            ->orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch (request('status')) {
                case 'Deleted':
                    $transactions = $transactions->onlyTrashed();
                    break;
                case 'Cancelled':
                    $transactions = $transactions->where("cancelled_at", "<>", null);
                    break;
                case 'Posted':
                    $transactions = $transactions->where("posted_at", "<>", null);
                    break;
                case 'Approved':
                    $transactions = $transactions->where("approved_at", "<>", null)->where("posted_at", null);
                    break;
                case 'Pending':
                    $transactions = $transactions->where("approved_at", null);
                    break;
                default:
                    $transactions = $transactions;
                    break;
            }
        }

        if (request()->has("start_date") && request()->has("end_date")) {
            $start_date = Carbon::parse(request("start_date"))->startOfDay();
            $end_date = Carbon::parse(request("end_date"))->endOfDay();
            $transactions = $transactions->whereBetween("request_date", [$start_date, $end_date]);
        }

        $transactions = $transactions->paginate($itemsPerPage);

        return $this->successResponse('read', $transactions, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DisposalRequestStoreRequest $request)
    {
        $validated = $request->validated();

        $data = DB::transaction(function () use ($validated) {
            $code = 'DIS' . date("YmdHis");

            $transaction_type = TransactionType::findOrFail($validated['transaction_type_id']);

            $transaction = new Transaction();
            $transaction->code = $code;
            $transaction->reference_no = $validated['reference_no'];
            $transaction->request_date = $validated['request_date'];
            $transaction->description = $validated['description'];

            $transaction->transaction_type()->associate($transaction_type);
            $transaction->user()->associate(Auth::user());

            $transaction->save();

            $transaction->assets()->sync(array_column($validated['assets'], 'id'));
            $transaction->assigned_employees()->sync(array_column($validated['assigned_employees'], 'id'));

            $disposal_request = new DisposalRequest();
            $disposal_request->save();
            $disposal_request->transaction()->save($transaction);

            $this->sendUserNotification($this->getRecipient("admin", null), "disposal", ["action" => "create", "data" => $transaction]);

            return $transaction;
        });

        return $this->successResponse('create', $data, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $transaction = Transaction::with([
            'user',
            'transactionable',
            'transaction_type',
            'assigned_location',
            'assigned_user',
            'assigned_asset',
            'parent_asset',
            'owner',
            'assets',
            'assigned_employees'
        ])
            ->where('transactionable_type', 'App\Models\DisposalRequest')
            ->findOrFail($id);
        return $this->successResponse('read', new DisposalRequestResource($transaction), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(DisposalRequestUpdateRequest $request, $id)
    {
        $validated = $request->validated();

        $data = DB::transaction(function () use ($validated, $id) {
            $transaction_type = TransactionType::findOrFail($validated['transaction_type_id']);

            $transaction = Transaction::findOrFail($id);
            $transaction->reference_no = $validated['reference_no'];
            $transaction->request_date = $validated['request_date'];
            $transaction->description = $validated['description'];

            $transaction->transaction_type()->associate($transaction_type);

            $transaction->save();

            $transaction->assets()->sync(array_column($validated['assets'], 'id'));
            $transaction->assigned_employees()->sync(array_column($validated['assigned_employees'], 'id'));

            $disposal_request = DisposalRequest::findOrFail($transaction->transactionable->id);
            $disposal_request->save();
            $disposal_request->transaction()->save($transaction);

            $this->sendUserNotification($this->getRecipient("admin", null), "disposal", ["action" => "update", "data" => $transaction]);

            return $transaction;
        });

        return $this->successResponse('update', $data, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = DB::transaction(function () use ($id) {
            $transaction = Transaction::destroy($id);
            return $transaction;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function destroyMany()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $transactions = Transaction::destroy($ids);
            return $transactions;
        });

        return $this->successResponse('delete', $data, 200);
    }

    /**
     * Restore the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restore()
    {
        $ids = request('ids') ?? [];

        $data = DB::transaction(function () use ($ids) {
            $data = Transaction::onlyTrashed()->findOrFail($ids);
            $data->each->restore();
            return $data;
        });

        return $this->successResponse('restore', $data, 200);
    }

    public function approve()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $transactions = Transaction::findOrFail($ids);
            $transactions->each(function ($item) {
                $item->approved_at = now();

                $this->sendUserNotification($this->getRecipient("user", User::find($item->user_id)), "disposal", ["action" => "approve", "data" => $item]);

                $item->save();
            });
            return $transactions;
        });

        return $this->successResponse('Successfully approved.', $data, 200);
    }

    public function complete()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $transactions = Transaction::findOrFail($ids);
            $transactions->each(function ($item) {
                $item->completed_at = now();

                $this->sendUserNotification($this->getRecipient("user", User::find($item->user_id)), "disposal", ["action" => "complete", "data" => $item]);

                $item->save();
            });
            return $transactions;
        });

        return $this->successResponse('Successfully completed.', $data, 200);
    }

    public function post()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $transactions = Transaction::findOrFail($ids);
            $transactions->each(function ($item) {
                $item->posted_at = now();

                $this->sendUserNotification($this->getRecipient("user", User::find($item->user_id)), "disposal", ["action" => "post", "data" => $item]);

                $item->save();
            });
            return $transactions;
        });

        return $this->successResponse('Successfully posted.', $data, 200);
    }

    public function cancel()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $transactions = Transaction::findOrFail($ids);
            $transactions->each(function ($item) {
                $item->cancelled_at = now();

                $this->sendUserNotification($this->getRecipient("user", User::find($item->user_id)), "disposal", ["action" => "cancel", "data" => $item]);

                $item->save();
            });
            return $transactions;
        });

        return $this->successResponse('Successfully cancelled.', $data, 200);
    }
}
