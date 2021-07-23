<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\AssetCategory\AssetCategoryStoreRequest;
use App\Http\Requests\AssetCategory\AssetCategoryUpdateRequest;
use App\Http\Resources\AssetCategoryResource;
use App\Models\AssetCategory;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AssetCategoryController extends Controller
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

        $asset_categories = AssetCategory::search($search)
            ->orderBy($sortBy, $sortType)
            ->paginate($itemsPerPage);

        return $this->successResponse('read', $asset_categories, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AssetCategoryStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $code = 'ASC' . date("YmdHis");
            $slug = $code . '-' . implode('-', explode(' ', $validated['name']));

            $asset_category = new AssetCategory();
            $asset_category->fill($validated);
            $asset_category->code = $code;
            $asset_category->slug = $slug;
            $asset_category->save();

            return $asset_category;
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
        $asset_category = AssetCategory::findOrFail($id);
        return $this->successResponse('read', new AssetCategoryResource($asset_category), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AssetCategoryUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($id, $validated) {
            $asset_category = AssetCategory::findOrFail($id);
            $asset_category->fill($validated);
            $asset_category->slug = $asset_category->code . '-' . implode('-', explode(' ', $validated['name']));
            $asset_category->save();
            return $asset_category;
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
            $asset_category = AssetCategory::destroy($id);
            return $asset_category;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function destroyMany()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $asset_categories = AssetCategory::destroy($ids);
            return $asset_categories;
        });

        return $this->successResponse('delete', $data, 200);
    }
}
