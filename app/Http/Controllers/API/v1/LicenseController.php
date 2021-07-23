<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\License\LicenseStoreRequest;
use App\Http\Requests\License\LicenseUpdateRequest;
use App\Http\Resources\LicenseResource;
use App\Models\License;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LicenseController extends Controller
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

        $licenses = License::with(['asset_category', 'manufacturer', 'supplier'])
            ->search($search)
            ->orderBy($sortBy, $sortType)
            ->paginate($itemsPerPage);

        return $this->successResponse('read', $licenses, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LicenseStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $code = 'LIC' . date("YmdHis");
            $slug = $code . '-' . implode('-', explode(' ', $validated['description']));

            $license = new License();
            $license->fill($validated);
            $license->code = $code;
            $license->slug = $slug;
            $license->save();

            return $license;
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
        $license = License::with(['asset_category', 'manufacturer', 'supplier'])->findOrFail($id);
        return $this->successResponse('read', new LicenseResource($license), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(LicenseUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($id, $validated) {
            $license = License::findOrFail($id);
            $license->fill($validated);
            $license->slug = $license->code . '-' . implode('-', explode(' ', $validated['description']));
            $license->save();
            return $license;
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
            $license = License::destroy($id);
            return $license;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function destroyMany()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $licenses = License::destroy($ids);
            return $licenses;
        });

        return $this->successResponse('delete', $data, 200);
    }
}
