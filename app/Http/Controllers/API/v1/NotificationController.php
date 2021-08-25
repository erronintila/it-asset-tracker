<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Resources\NotificationResource;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $search = request("search") ?? "";
        $sortBy = request("sortBy") ?? "created_at";
        $sortType = request("sortType") ?? "desc";
        $itemsPerPage = request("itemsPerPage") ?? 10;
        $start_date = request("start_date") ?? date("Y-m-d");
        $end_date = request("end_date") ?? date("Y-m-d");

        $user = request()->has("user_id") ?
            (request("user_id") > 0 ?
                User::find(request("user_id")) :
                auth()->user()) :
            auth()->user();

        $status = request("status") ?? "All Notifications";

        if (request()->has("start_date") && request()->has("end_date")) {
            $start_date = Carbon::parse(request("start_date"))->startOfDay();
            $end_date = Carbon::parse(request("end_date"))->endOfDay();
            $notifications = $user->notifications()->whereBetween("created_at", [$start_date, $end_date]);
        }

        switch ($status) {
            case 'All Read':
                $notifications = $notifications->where("read_at", "<>", null);

                break;
            case 'All Unread':
                $notifications = $notifications->where("read_at", null);

                break;

            default:
                break;
        }

        return NotificationResource::collection($notifications->paginate($itemsPerPage))->additional(['meta' => [
            'unread' => $user->unReadNotifications->count(),
        ]]);
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
        return new NotificationResource(auth()->user()->unreadNotifications->where('id', $id));
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

    public function mark_read()
    {
        DB::transaction(function () {
            switch (request("type")) {
                case 'all':
                    auth()->user()->unreadNotifications->markAsRead();
                    break;
                default:
                    foreach (request("ids") as $notif_id) {
                        auth()->user()->unreadNotifications->where('id', $notif_id)->markAsRead();
                    }
                    break;
            }
        });

        $message = "Notification(s) marked as read";
        return $this->successResponse([], $message, 200);
    }

    public function mark_unread()
    {
        DB::transaction(function () {
            switch (request("type")) {
                case 'all':
                    auth()->user()->readNotifications->markAsUnread();
                    break;
                default:
                    foreach (request("ids") as $notif_id) {
                        auth()->user()->readNotifications->where('id', $notif_id)->markAsUnread();
                    }
                    break;
            }
        });

        $message = "Notification(s) marked as unread";
        return $this->successResponse([], $message, 200);
    }
}
