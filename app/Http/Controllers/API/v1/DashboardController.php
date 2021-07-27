<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Models\Asset;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    use HttpResponseMessage;

    public function index()
    {
        $assets = DB::table('assets')->count();

        return $this->successResponse("", [
            "requests" => [],
            "assets" => [
                "total" => $assets
            ],
            "work_orders" => []
        ], 200);
    }
}
