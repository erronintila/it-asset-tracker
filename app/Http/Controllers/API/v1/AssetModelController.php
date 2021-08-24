<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\AssetModel\AssetModelStoreRequest;
use App\Http\Requests\AssetModel\AssetModelUpdateRequest;
use App\Http\Resources\AssetModelResource;
use App\Models\AssetModel;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AssetModelController extends Controller
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

        $asset_models = AssetModel::with(['manufacturer'])
            ->search($search)
            ->orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch (request('status')) {
                case 'Deleted':
                    $asset_models = $asset_models->onlyTrashed();
                    break;
                case 'Inactive':
                    $asset_models = $asset_models->where('is_active', false);
                    break;
                default:
                    $asset_models = $asset_models->where('is_active', true);
                    break;
            }
        }

        $asset_models = $asset_models->paginate($itemsPerPage);

        return $this->successResponse('read', $asset_models, 200);
        // return $this->successResponse('Success', AssetModelResource::collection($asset_models), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AssetModelStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $code = 'MOD' . date("YmdHis");
            $slug = $code . '-' . implode('-', explode(' ', $validated['name']));

            $asset_model = new AssetModel();
            $asset_model->fill($validated);
            $asset_model->code = $code;
            $asset_model->slug = $slug;
            $asset_model->save();

            return $asset_model;
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
        $asset_model = AssetModel::with(['manufacturer'])->findOrFail($id);
        return $this->successResponse('read', new AssetModelResource($asset_model), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AssetModelUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($id, $validated) {
            $asset_model = AssetModel::findOrFail($id);
            $asset_model->fill($validated);
            $asset_model->slug = $asset_model->code . '-' . implode('-', explode(' ', $validated['name']));
            $asset_model->save();
            return $asset_model;
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
            $asset_model = AssetModel::destroy($id);
            return $asset_model;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function destroyMany()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $asset_models = AssetModel::destroy($ids);
            return $asset_models;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function activate()
    {
        $ids = request('ids');
        $activation = request("is_active") ? "activated" : "deactivated";
        $data = DB::transaction(function () use ($ids, $activation) {
            $data_items = AssetModel::findOrFail($ids);
            $data_items->each(function ($item) use ($activation) {
                $item->is_active = request("is_active");
                $item->save();
            });
            return $data_items;
        });

        return $this->successResponse('update', $data, 200);
    }
}
