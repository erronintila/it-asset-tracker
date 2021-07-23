<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\TransactionType\TransactionTypeStoreRequest;
use App\Http\Requests\TransactionType\TransactionTypeUpdateRequest;
use App\Http\Resources\TransactionTypeResource;
use App\Models\TransactionType;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TransactionTypeController extends Controller
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

        $transaction_types = TransactionType::search($search)
            ->orderBy($sortBy, $sortType)
            ->paginate($itemsPerPage);

        return $this->successResponse('read', $transaction_types, 200);
        // return $this->successResponse('Success', TransactionTypeResource::collection($transaction_types), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TransactionTypeStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $code = 'TRA' . date("YmdHis");
            $slug = $code . '-' . implode('-', explode(' ', $validated['name']));

            $transaction_type = new TransactionType();
            $transaction_type->fill($validated);
            $transaction_type->code = $code;
            $transaction_type->slug = $slug;
            $transaction_type->save();

            return $transaction_type;
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
        $transaction_type = TransactionType::findOrFail($id);
        return $this->successResponse('read', new TransactionTypeResource($transaction_type), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(TransactionTypeUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($id, $validated) {
            $transaction_type = TransactionType::findOrFail($id);
            $transaction_type->fill($validated);
            $transaction_type->slug = $transaction_type->code . '-' . implode('-', explode(' ', $validated['name']));
            $transaction_type->save();
            return $transaction_type;
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
            $transaction_type = TransactionType::destroy($id);
            return $transaction_type;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function destroyMany()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $transaction_types = TransactionType::destroy($ids);
            return $transaction_types;
        });

        return $this->successResponse('delete', $data, 200);
    }
}
