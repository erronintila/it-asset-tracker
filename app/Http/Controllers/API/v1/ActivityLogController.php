<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Spatie\Activitylog\Models\Activity;

class ActivityLogController extends Controller
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
        $sortBy = request('sortBy') ?? "created_at";
        $sortType = request('sortType') ?? "desc";
        $itemsPerPage = request('itemsPerPage') ?? 10;
        $user_id = request("user_id") ?? null;
        $subject_type = request("subject_type") ?? null;
        $subject_id = request("subject_id") ?? null;

        $activity_logs = Activity::with("causer");

        if ($user_id) {
            $activity_logs = $activity_logs->where("causer_id", $user_id);
        }

        if ($subject_id && $subject_type) {
            $activity_logs = $activity_logs->where("subject_type", $subject_type)->where("subject_id", $subject_id);
        }

        $activity_logs = $activity_logs->orderBy($sortBy, $sortType)
            ->paginate($itemsPerPage);

        return $this->successResponse('read', $activity_logs, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }
}
