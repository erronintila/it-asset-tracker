<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionController extends Controller
{
    use HttpResponseMessage;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        switch (request("role")) {
            case 'Standard User':
                $permissions =  Role::findByName("Standard User", 'web')->permissions ?? [];
                break;
            case 'Administrator':
                $permissions =  Role::findByName("Administrator", 'web')->permissions ?? [];
                break;
            default:
                $permissions =  Permission::all();
                break;
        }

        if (request("user_id")) {
            $permissions = User::findOrFail(request("user_id"))->permissions;
        }

        return $this->successResponse("read", $permissions, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $permissions = User::findOrFail($id)->getAllPermissions();
        return $this->successResponse("read", $permissions, 200);
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
        $permissions = request("permissions") ?? [];

        $data = DB::transaction(function () use ($id, $permissions) {
            $user = User::findOrFail($id);

            if (request()->has("permissions")) {
                $user->syncPermissions([]);
                $user->syncRoles([]);
                foreach ($permissions as $permission) {
                    $user->givePermissionTo($permission["name"]);
                }
            }

            return $user;
        });

        return $this->successResponse("update", $permissions, 200);
    }
}
