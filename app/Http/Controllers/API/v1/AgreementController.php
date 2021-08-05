<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Agreement\AgreementStoreRequest;
use App\Http\Requests\Agreement\AgreementUpdateRequest;
use App\Http\Resources\AgreementResource;
use App\Models\Agreement;
use App\Models\Asset;
use App\Models\User;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AgreementController extends Controller
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

        $agreements = Agreement::with(["asset", "customer"])
            ->search($search)
            ->orderBy($sortBy, $sortType)
            ->paginate($itemsPerPage);

        return $this->successResponse('read', $agreements, 200);
        // return $this->successResponse('Success', AgreementResource::collection($agreements), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AgreementStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $code = 'AGR' . date("YmdHis");
            $slug = $code . '-' . implode('-', explode(' ', $validated['description']));

            $asset = Asset::findOrFail($validated["asset_id"]);
            $customer = User::findOrFail($validated["customer_id"]);

            $agreement = new Agreement();
            $agreement->fill($validated);
            $agreement->code = $code;
            $agreement->slug = $slug;

            $agreement->asset()->associate($asset);
            $agreement->customer()->associate($customer);

            $agreement->save();

            return $agreement;
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
        $agreement = Agreement::with(["asset", "customer"])->findOrFail($id);
        return $this->successResponse('read', new AgreementResource($agreement), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AgreementUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($id, $validated) {
            $asset = Asset::findOrFail($validated["asset_id"]);
            $customer = User::findOrFail($validated["customer_id"]);

            $agreement = Agreement::findOrFail($id);
            $agreement->fill($validated);
            $agreement->slug = $agreement->code . '-' . implode('-', explode(' ', $validated['description']));

            $agreement->asset()->associate($asset);
            $agreement->customer()->associate($customer);

            $agreement->save();
            return $agreement;
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
            $agreement = Agreement::destroy($id);
            return $agreement;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function destroyMany()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $agreements = Agreement::destroy($ids);
            return $agreements;
        });

        return $this->successResponse('delete', $data, 200);
    }
}
