<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserUpdatePasswordRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use App\Traits\HttpResponseMessage;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    use HttpResponseMessage;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return UserResource::collection($users);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new User();
        return $this->successResponse("", $user, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        return $this->successResponse("", $user, 200);
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
        $user = User::find($id);
        return $this->successResponse("", $user, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $user = User::destroy($id);
        return $this->successResponse("", $user, 200);
    }

        /**
     * Restore the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function restore()
    {
        $ids = request('ids') ?? [];

        $data = DB::transaction(function () use ($ids) {
            $data = User::onlyTrashed()->findOrFail($ids);
            $data->each->restore();
            return $data;
        });

        return $this->successResponse('restore', $data, 200);
    }

    public function update_password(UserUpdatePasswordRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $user = User::findOrFail(auth()->user()->id);
            $user->update(['password' => bcrypt($validated["password"])]);
            return $user;
        });

        return $this->successResponse("User password updated successfully", $data, 200);
    }
}
