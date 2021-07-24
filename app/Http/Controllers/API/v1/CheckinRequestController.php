<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\CheckinRequest\CheckinRequestStoreRequest;
use App\Http\Requests\CheckinRequest\CheckinRequestUpdateRequest;
use App\Http\Resources\TransactionResource;
use App\Models\CheckinRequest;
use App\Models\Location;
use App\Models\Transaction;
use App\Models\TransactionType;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CheckinRequestController extends Controller
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
            ->where('transactionable_type', 'App\Models\CheckinRequest')
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
    public function store(CheckinRequestStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $code = 'CIN' . date("YmdHis");

            $transaction_type = TransactionType::findOrFail($validated['transaction_type_id']);

            $transaction = new Transaction();
            $transaction->type = "checkin";
            $transaction->name = $validated['first_name'] . ' ' . $validated['last_name'];
            $transaction->transactionname = $validated['transactionname'];
            $transaction->email = $validated['email'] ?? null;
            $transaction->password = bcrypt('password');

            $checkin_request = new CheckinRequest();
            $checkin_request->fill($validated);
            $checkin_request->code = $code;

            $checkin_request->transaction_type()->associate($transaction_type);
            if ($validated['location_id']) {
                $location = Location::findOrFail($validated['location_id']);
                $checkin_request->location()->associate($location);
            }

            $checkin_request->save();
            $checkin_request->transaction()->save($transaction);

            return $checkin_request;
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
        $transaction = Transaction::with(['user', 'transactionable'])
            ->where('transactionable_type', 'App\Models\CheckinRequest')
            ->findOrFail($id);
        return $this->successResponse('read', new TransactionResource($transaction), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CheckinRequestUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($id, $validated) {
            $transaction = Transaction::findOrFail($id);

            $transaction_type = TransactionType::findOrFail($validated['transaction_type_id']);

            $transaction->type = "checkin";
            $transaction->name = ($validated['first_name'] . ' ' . $validated['last_name']);
            $transaction->email = $validated['email'] ?? null;
            $transaction->transactionname = $validated['transactionname'];
            // $transaction->save();

            $checkin_request = CheckinRequest::findOrFail($transaction->profile->id);
            $checkin_request->fill($validated);

            $checkin_request->transaction_type()->associate($transaction_type);
            if ($validated['location_id']) {
                $location = Location::findOrFail($validated['location_id']);
                $checkin_request->location()->associate($location);
            }

            $checkin_request->save();
            $checkin_request->transaction()->save($transaction);

            return $checkin_request;
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
}
