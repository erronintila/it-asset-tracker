<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Location\LocationStoreRequest;
use App\Http\Requests\Location\LocationUpdateRequest;
use App\Http\Resources\LocationResource;
use App\Models\Location;
use App\Traits\HttpResponseMessage;
use Illuminate\Support\Facades\DB;

class LocationController extends Controller
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

        $locations = Location::search($search)
            ->orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch (request('status')) {
                case 'Deleted':
                    $locations = $locations->onlyTrashed();
                    break;
                case 'Inactive':
                    $locations = $locations->where('is_active', false);
                    break;
                default:
                    $locations = $locations->where('is_active', true);
                    break;
            }
        }

        $locations = $locations->paginate($itemsPerPage);

        return $this->successResponse('read', $locations, 200);
        // return $this->successResponse('Success', LocationResource::collection($locations), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LocationStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $code = 'LOC' . date("YmdHis");
            $slug = $code . '-' . implode('-', explode(' ', $validated['name']));

            $location = new Location();
            $location->fill($validated);
            $location->code = $code;
            $location->slug = $slug;
            $location->save();

            return $location;
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
        $location = Location::findOrFail($id);
        return $this->successResponse('read', new LocationResource($location), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(LocationUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($id, $validated) {
            $location = Location::findOrFail($id);
            $location->fill($validated);
            $location->slug = $location->code . '-' . implode('-', explode(' ', $validated['name']));
            $location->save();
            return $location;
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
            $location = Location::destroy($id);
            return $location;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function destroyMany()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $locations = Location::destroy($ids);
            return $locations;
        });

        return $this->successResponse('delete', $data, 200);
    }
}
