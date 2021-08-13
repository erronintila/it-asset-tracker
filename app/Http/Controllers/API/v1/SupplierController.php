<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Supplier\SupplierStoreRequest;
use App\Http\Requests\Supplier\SupplierUpdateRequest;
use App\Http\Resources\SupplierResource;
use App\Models\Supplier;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SupplierController extends Controller
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
        $sortBy = request('sortBy') ?? "name";
        $sortType = request('sortType') ?? "asc";
        $itemsPerPage = request('itemsPerPage') ?? 10;

        $suppliers = Supplier::search($search)
            ->orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch (request('status')) {
                case 'Deleted':
                    $suppliers = $suppliers->onlyTrashed();
                    break;
                case 'Inactive':
                    $suppliers = $suppliers->where('is_active', false);
                    break;
                default:
                    $suppliers = $suppliers->where('is_active', true);
                    break;
            }
        }

        $suppliers = $suppliers->paginate($itemsPerPage);

        return $this->successResponse('read', $suppliers, 200);
        // return $this->successResponse('Success', SupplierResource::collection($suppliers), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SupplierStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $code = 'SUP' . date("YmdHis");
            $slug = $code . '-' . implode('-', explode(' ', $validated['name']));

            $supplier = new Supplier();
            $supplier->fill($validated);
            $supplier->code = $code;
            $supplier->slug = $slug;
            $supplier->save();

            return $supplier;
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
        $supplier = Supplier::findOrFail($id);
        return $this->successResponse('read', new SupplierResource($supplier), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SupplierUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($id, $validated) {
            $supplier = Supplier::findOrFail($id);
            $supplier->fill($validated);
            $supplier->slug = $supplier->code . '-' . implode('-', explode(' ', $validated['name']));
            $supplier->save();
            return $supplier;
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
            $supplier = Supplier::destroy($id);
            return $supplier;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function destroyMany()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $suppliers = Supplier::destroy($ids);
            return $suppliers;
        });

        return $this->successResponse('delete', $data, 200);
    }
}
