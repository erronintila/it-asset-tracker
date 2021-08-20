<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Models\Asset;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class MediaController extends Controller
{
    use HttpResponseMessage;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sortBy = request('sortBy') ?? "name";
        $sortType = request('sortType') ?? "asc";
        $itemsPerPage = request('itemsPerPage') ?? 10;
        $modelName = request('model');
        $modelID = request('model_id');
        $model = '\\App\\Models\\' . $modelName;

        $asset = $model::findOrFail($modelID);
        $mediaLibrary = $asset->media()
            ->where('collection_name', 'default')
            ->paginate($itemsPerPage);

        return $this->successResponse("read", $mediaLibrary, 201);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $modelName = request('model');
        $modelID = request('model_id');
        $model = '\\App\\Models\\' . $modelName;

        $data = $model::findOrFail($modelID);
        $data->addMediaFromRequest('file')
            ->toMediaCollection();

        return $this->successResponse("create", $data, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $media = Media::findOrFail($id);

        return response()->download($media->getPath(), $media->file_name);

        // return $this->successResponse("create", [...$media, ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $media = Media::findOrFail($id);
        $media->delete();

        return $this->successResponse("delete", [], 200);
    }
}
