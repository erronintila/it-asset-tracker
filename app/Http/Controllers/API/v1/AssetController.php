<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Asset\AssetStoreRequest;
use App\Http\Requests\Asset\AssetUpdateRequest;
use App\Http\Resources\AssetResource;
use App\Models\Asset;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AssetController extends Controller
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
        $request_type = request("request_type") ?? null;
        $assigned_user_id = request("assigned_user_id") ?? null;
        $assigned_asset_id = request("assigned_asset_id") ?? null;
        // $statuses = request('statuses') ?? ['Pending', 'In Storage', 'In Use', 'In Maintenance', 'Disposed'];

        $assets = Asset::with(['assigned_user', 'asset_category', 'supplier', 'manufacturer', 'asset_model'])
            ->search($search)
            ->orderBy($sortBy, $sortType);

        if ($request_type) {
            switch ($request_type) {
                case 'checkin':
                    break;
                case 'checkout':
                    $assets = $assets->where("disposed_at", null)->where("assigned_location_id", "<>", null);
                    break;
                case 'disposal':
                    $assets = $assets->where("disposed_at", null)->where("assigned_user_id", null)->where("assigned_location_id", "<>", null);
                    break;
                case 'maintenance':
                    $assets = $assets->where("disposed_at", null)->where("assigned_location_id", "<>", null);
                    break;
                default:
                    break;
            }
        }

        if ($assigned_user_id) {
            $assets = $assets->where("assigned_user_id", $assigned_user_id);
        }

        if ($assigned_asset_id) {
            $assets = $assets->where("assigned_asset_id", $assigned_asset_id);
        }

        // if (in_array("Pending", $statuses)) {
        //     $assets = $assets->where("assigned_location_id", null)
        //         ->where("assigned_user_id", null);
        // }

        // if (in_array("In Storage", $statuses)) {
        //     $assets = $assets->where("assigned_location_id", "<>", null)
        //         ->where("assigned_user_id", null);
        // }

        // if (in_array("In Use", $statuses)) {
        //     $assets = $assets->where("assigned_user_id", "<>", null);
        // }

        // if (in_array("In Maintenance", $statuses)) {
        //     $assets = $assets->where("is_under_maintenance", true);
        // }

        // if (in_array("Disposed", $statuses)) {
        //     $assets = $assets->where("disposed_at", "<>", null);
        // }

        $assets = $assets->paginate($itemsPerPage);

        return $this->successResponse('read', $assets, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AssetStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $asset_tag = $validated['asset_tag'] ?? date("YmdHis");
            $code = 'AST' . date("YmdHis");
            $slug = $code . '-' . implode('-', explode(' ', $asset_tag));

            $asset = new Asset();
            $asset->fill($validated);
            $asset->code = $code;
            $asset->slug = $slug;
            $asset->asset_tag = $asset_tag;
            $asset->save();

            return $asset;
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
        $asset = Asset::with(['assigned_user', 'asset_category', 'supplier', 'manufacturer', 'asset_model'])->findOrFail($id);
        return $this->successResponse('read', new AssetResource($asset), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AssetUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($id, $validated) {
            $asset_tag = $validated['asset_tag'] ?? date("YmdHis");

            $asset = Asset::findOrFail($id);
            $asset->fill($validated);
            $asset->slug = $asset->code . '-' . implode('-', explode(' ', $asset_tag));
            $asset->save();
            return $asset;
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
            $asset = Asset::destroy($id);
            return $asset;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function destroyMany()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $assets = Asset::destroy($ids);
            return $assets;
        });

        return $this->successResponse('delete', $data, 200);
    }
}
