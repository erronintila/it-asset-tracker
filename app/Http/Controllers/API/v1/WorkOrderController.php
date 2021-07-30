<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\WorkOrder\WorkOrderStoreRequest;
use App\Http\Requests\WorkOrder\WorkOrderUpdateRequest;
use App\Http\Resources\WorkOrderResource;
use App\Models\Location;
use App\Models\Transaction;
use App\Models\TransactionType;
use App\Models\WorkOrder;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class WorkOrderController extends Controller
{
    use HttpResponseMessage;

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
            ->where('transactionable_type', 'App\Models\WorkOrder')
            ->orderBy($sortBy, $sortType)
            ->paginate($itemsPerPage);

        return $this->successResponse('read', $transactions, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(WorkOrderStoreRequest $request)
    {
        $validated = $request->validated();

        $data = DB::transaction(function () use ($validated) {
            $code = 'CIN' . date("YmdHis");

            $transaction_type = TransactionType::findOrFail($validated['transaction_type_id']);
            $location = Location::findOrFail($validated['assigned_location_id']);

            $transaction = new Transaction();
            $transaction->code = $code;
            $transaction->reference_no = $validated['reference_no'];
            $transaction->request_date = $validated['request_date'];
            $transaction->description = $validated['description'];

            $transaction->transaction_type()->associate($transaction_type);
            $transaction->assigned_location()->associate($location);
            $transaction->user()->associate(Auth::user());
            $transaction->save();

            $transaction->assets()->sync(array_column($validated['assets'], 'id'));
            $transaction->assigned_employees()->sync(array_column($validated['assigned_employees'], 'id'));

            $checkin_request = new WorkOrder();
            $checkin_request->save();
            $checkin_request->transaction()->save($transaction);

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
            ->where('transactionable_type', 'App\Models\WorkOrder')
            ->findOrFail($id);
        return $this->successResponse('read', new WorkOrderResource($transaction), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(WorkOrderUpdateRequest $request, $id)
    {
        $validated = $request->validated();

        $data = DB::transaction(function () use ($validated, $id) {
            $transaction_type = TransactionType::findOrFail($validated['transaction_type_id']);
            $location = Location::findOrFail($validated['assigned_location_id']);

            $transaction = Transaction::findOrFail($id);
            $transaction->reference_no = $validated['reference_no'];
            $transaction->request_date = $validated['request_date'];
            $transaction->description = $validated['description'];

            $transaction->transaction_type()->associate($transaction_type);
            $transaction->assigned_location()->associate($location);
            // $transaction->user()->associate(Auth::user());
            $transaction->save();

            $transaction->assets()->sync(array_column($validated['assets'], 'id'));
            $transaction->assigned_employees()->sync(array_column($validated['assigned_employees'], 'id'));

            $checkin_request = WorkOrder::findOrFail($transaction->transactionable->id);
            $checkin_request->save();
            $checkin_request->transaction()->save($transaction);

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

    public function approve()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $transactions = Transaction::findOrFail($ids);
            $transactions->each(function ($item) {
                $item->approved_at = now();
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
                $item->save();
            });
            return $transactions;
        });

        return $this->successResponse('Successfully cancelled.', $data, 200);
    }
}
