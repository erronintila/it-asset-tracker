<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Feature\FeatureStoreRequest;
use App\Http\Requests\Feature\FeatureUpdateRequest;
use App\Http\Resources\FeatureResource;
use App\Models\Feature;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FeatureController extends Controller
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

        $features = Feature::search($search)
            ->orderBy($sortBy, $sortType);

        if (request()->has('review_category_id')) {
            $features = $features->where('review_category_id', request("review_category_id"));
        }

        if (request()->has('status')) {
            switch (request('status')) {
                case 'Deleted':
                    $features = $features->onlyTrashed();
                    break;
                case 'Inactive':
                    $features = $features->where('is_active', false);
                    break;
                default:
                    $features = $features->where('is_active', true);
                    break;
            }
        }

        $features = $features->paginate($itemsPerPage);

        return $this->successResponse('read', $features, 200);
        // return $this->successResponse('Success', FeatureResource::collection($features), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FeatureStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $code = 'FEA' . date("YmdHis");
            $slug = $code . '-' . implode('-', explode(' ', $validated['name']));

            $feature = new Feature();
            $feature->fill($validated);
            $feature->code = $code;
            $feature->slug = $slug;
            $feature->save();

            return $feature;
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
        $feature = Feature::findOrFail($id);
        return $this->successResponse('read', new FeatureResource($feature), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(FeatureUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($id, $validated) {
            $feature = Feature::findOrFail($id);
            $feature->fill($validated);
            $feature->slug = $feature->code . '-' . implode('-', explode(' ', $validated['name']));
            $feature->save();
            return $feature;
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
            $feature = Feature::destroy($id);
            return $feature;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function destroyMany()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $features = Feature::destroy($ids);
            return $features;
        });

        return $this->successResponse('delete', $data, 200);
    }
}
