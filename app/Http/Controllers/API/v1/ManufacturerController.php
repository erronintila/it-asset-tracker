<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Manufacturer\ManufacturerStoreRequest;
use App\Http\Requests\Manufacturer\ManufacturerUpdateRequest;
use App\Http\Resources\ManufacturerResource;
use App\Models\Manufacturer;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ManufacturerController extends Controller
{
    use HttpResponseMessage;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sortBy = request('sortBy') ?? "code";
        $sortType = request('sortType') ?? "asc";
        $itemsPerPage = request('itemsPerPage') ?? 10;

        $manufacturers = Manufacturer::orderBy($sortBy, $sortType)->paginate($itemsPerPage);

        return $this->successResponse('read', $manufacturers, 200);
        // return $this->successResponse('Success', ManufacturerResource::collection($manufacturers), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ManufacturerStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $code = 'MAN' . date("YmdHis");
            $slug = $code . '-' . implode('-', explode(' ', $validated['name']));

            $manufacturer = new Manufacturer();
            $manufacturer->fill($validated);
            $manufacturer->code = $code;
            $manufacturer->slug = $slug;
            $manufacturer->save();

            return $manufacturer;
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
        $manufacturer = Manufacturer::findOrFail($id);
        return $this->successResponse('read', new ManufacturerResource($manufacturer), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ManufacturerUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($id, $validated) {
            $manufacturer = Manufacturer::findOrFail($id);
            $manufacturer->fill($validated);
            $manufacturer->slug = $manufacturer->code . '-' . implode('-', explode(' ', $validated['name']));
            $manufacturer->save();
            return $manufacturer;
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
            $manufacturer = Manufacturer::findOrFail($id);
            return $manufacturer;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function destroyMany()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $manufacturers = Manufacturer::destroy($ids);
            return $manufacturers;
        });

        return $this->successResponse('delete', $data, 200);
    }
}
