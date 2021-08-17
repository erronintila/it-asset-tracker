<?php

namespace App\Http\Controllers\API\v1;

use App\Classes\PrintSettings;
use App\Http\Controllers\Controller;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PrintSettingController extends Controller
{
    use HttpResponseMessage;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $group = request("group") ?? "print";
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
        PrintSettings $settings
    ) {
        $settings->paper_size = $request->input('paper_size');
        $settings->orientation = $request->input('orientation');
        $settings->save();

        return $this->successResponse("update", [], 200);
    }
}
