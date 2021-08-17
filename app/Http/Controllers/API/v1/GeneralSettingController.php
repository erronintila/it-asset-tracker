<?php

namespace App\Http\Controllers\API\v1;

use App\Classes\GeneralSettings;
use App\Http\Controllers\Controller;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class GeneralSettingController extends Controller
{
    use HttpResponseMessage;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $group = request("group") ?? "general";
        $settings = DB::table('settings');

        if ($group) {
            $settings = $settings->where("group", request("group"));
        }

        $settings = $settings->get();

        return $this->successResponse("", $settings, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(
        Request $request,
        GeneralSettings $settings
    ) {
        $settings->site_name = $request->input('site_name');
        $settings->site_active = $request->input('site_active');
        $settings->save();

        return $this->successResponse("update", [], 200);
    }
}
