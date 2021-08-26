<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Models\Asset;
use App\Traits\HttpResponseMessage;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    use HttpResponseMessage;

    public function index()
    {
        $user_id = request("user_id") ?? null;
        $start_date = request("start_date") ?? date("Y-01-01");
        $end_date = request("end_date") ?? date("Y-12-31");

        $assets = DB::table('assets')->where("disposed_at", null);
        $total_active_assets = $assets->where("assigned_location_id", "<>", null)->count();
        $pending_assets = DB::table('assets')->where("disposed_at", null)->where("assigned_user_id", null)->where("assigned_location_id", null)->count();
        $in_storage_assets = DB::table('assets')->where("disposed_at", null)->where("assigned_user_id", null)->where("assigned_location_id", "<>", null)->count();
        $in_use_assets = DB::table('assets')->where("disposed_at", null)->where("assigned_user_id", "<>", null)->where("assigned_location_id", "<>", null)->count();
        $in_maintenance_assets = DB::table('assets')->where("disposed_at", null)->where("is_under_maintenance", 1)->count();

        $completed_work_orders = DB::table('transactions')
            ->join("transaction_types", "transactions.transaction_type_id", "=", "transaction_types.id")
            ->where("transaction_types.action_type", "maintenance");
        if ($user_id) {
            $completed_work_orders = $completed_work_orders->where("transactions.user_id", $user_id);
        }
        $completed_work_orders = $completed_work_orders->whereBetween("transactions.request_date", [$start_date, $end_date]);
        $completed_work_orders = $completed_work_orders->where("transactions.cancelled_at", null)
            ->where("transactions.completed_at", "<>", null)
            ->where("transactions.posted_at", "<>", null)
            ->count();

        $pending_work_orders = DB::table('transactions')
            ->join("transaction_types", "transactions.transaction_type_id", "=", "transaction_types.id")
            ->where("transaction_types.action_type", "maintenance");
        if ($user_id) {
            $pending_work_orders = $pending_work_orders->where("transactions.user_id", $user_id);
        }
        $pending_work_orders = $pending_work_orders->whereBetween("transactions.request_date", [$start_date, $end_date]);
        $pending_work_orders = $pending_work_orders->where("transactions.approved_at", null)
            ->where("transactions.cancelled_at", null)
            ->where("transactions.completed_at", null)
            ->where("transactions.posted_at", null)
            ->count();

        $scheduled_work_orders = DB::table('transactions')
            ->join("transaction_types", "transactions.transaction_type_id", "=", "transaction_types.id")
            ->where("transaction_types.action_type", "maintenance");
        if ($user_id) {
            $scheduled_work_orders = $scheduled_work_orders->where("transactions.user_id", $user_id);
        }
        $scheduled_work_orders = $scheduled_work_orders->whereBetween("transactions.request_date", [$start_date, $end_date]);
        $scheduled_work_orders = $scheduled_work_orders->where("transactions.cancelled_at", null)
            ->where("transactions.approved_at", "<>", null)
            ->where("transactions.completed_at", null)
            ->where("transactions.posted_at", null)
            ->where("transactions.posted_at", null)
            ->count();

        $work_orders = DB::table('transactions')
            ->join("transaction_types", "transactions.transaction_type_id", "=", "transaction_types.id")
            ->select(DB::raw("count(transactions.id) as total, transaction_types.name"))
            ->where(DB::raw("transaction_types.action_type"), "maintenance");
        if ($user_id) {
            $work_orders = $work_orders->where("transactions.user_id", $user_id);
        }
        $work_orders = $work_orders->whereBetween("transactions.request_date", [$start_date, $end_date]);
        $work_orders = $work_orders->where(DB::raw("transactions.cancelled_at"), null)
            ->where(DB::raw("transactions.posted_at"), "<>", null)
            ->groupBy(DB::raw("transaction_types.id"))
            ->get();


        return $this->successResponse("", [
            "requests" => [],
            "assets" => [
                "total" => $total_active_assets,
                "status" => [
                    "pending" => $pending_assets,
                    "in_use" => $in_use_assets,
                    "in_storage" => $in_storage_assets,
                    "in_maintenance" => $in_maintenance_assets
                ]
            ],
            "work_orders" => [
                "completed" => $completed_work_orders,
                "pending" => $pending_work_orders,
                "scheduled" => $scheduled_work_orders,
                "categories" => $work_orders
            ]
        ], 200);
    }
}
