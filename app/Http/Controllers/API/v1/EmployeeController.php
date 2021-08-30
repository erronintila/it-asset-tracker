<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Employee\EmployeeStoreRequest;
use App\Http\Requests\Employee\EmployeeUpdateRequest;
use App\Http\Resources\EmployeeResource;
use App\Http\Resources\UserResource;
use App\Models\Department;
use App\Models\Employee;
use App\Models\Location;
use App\Models\User;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    use HttpResponseMessage;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $employees = User::with(['profile' => function ($query) {
        //     $query->with(['user', 'department']);
        // }])->where('profile_type', 'App\Models\Employee')->paginate(10);

        // return UserResource::collection($employees);
        $search = request('search') ?? "";
        $sortBy = request('sortBy') ?? "name";
        $sortType = request('sortType') ?? "asc";
        $itemsPerPage = request('itemsPerPage') ?? 10;

        $users = User::search($search)
            ->with(['profile' => function ($query) {
                $query->with(['location', 'department']);
            }])->where('profile_type', 'App\Models\Employee')
            ->orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch (request('status')) {
                case 'Deleted':
                    $users = $users->onlyTrashed();
                    break;
                case 'Inactive':
                    $users = $users->where('is_active', false);
                    break;
                default:
                    $users = $users->where('is_active', true);
                    break;
            }
        }

        $users = $users->paginate($itemsPerPage);

        return $this->successResponse('read', $users, 200);
        // return $this->successResponse('Success', UserResource::collection($users), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EmployeeStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $code = 'EMP' . date("YmdHis");
            $slug = $code . '-' . implode('-', explode(' ', ($validated['first_name'] . ' ' . $validated['last_name'])));

            $department = Department::findOrFail($validated['department_id']);

            $user = new User();
            $user->type = "employee";
            $user->name = $validated['first_name'] . ' ' . $validated['last_name'];
            $user->username = $validated['username'];
            $user->email = $validated['email'] ?? null;
            $user->email_verified_at = now();
            $user->can_login = $validated['can_login'];
            $user->password = bcrypt('password');

            $employee = new Employee();
            $employee->fill(Arr::except($validated, ['email', 'username', 'can_login']));
            $employee->code = $code;
            $employee->slug = $slug;

            $employee->department()->associate($department);
            if ($validated['location_id']) {
                $location = Location::findOrFail($validated['location_id']);
                $employee->location()->associate($location);
            }

            $employee->save();
            $employee->user()->save($user);

            return $employee;
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
        $user = User::with(['profile' => function ($query) {
            $query->with(['department', 'location']);
        }])
            ->where('profile_type', 'App\Models\Employee')
            ->findOrFail($id);
        return $this->successResponse('read', new UserResource($user), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(EmployeeUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($id, $validated) {
            $user = User::findOrFail($id);
            $slug = $user->profile->code . '-' . implode('-', explode(' ', ($validated['first_name'] . ' ' . $validated['last_name'])));

            $department = Department::findOrFail($validated['department_id']);

            $user->type = "employee";
            $user->name = ($validated['first_name'] . ' ' . $validated['last_name']);
            $user->email = $validated['email'] ?? null;
            $user->username = $validated['username'];
            $user->can_login = $validated['can_login'];
            // $user->save();

            $employee = Employee::findOrFail($user->profile->id);
            $employee->fill(Arr::except($validated, ['email', 'username', 'can_login']));
            $employee->slug = $slug;

            $employee->department()->associate($department);
            if ($validated['location_id']) {
                $location = Location::findOrFail($validated['location_id']);
                $employee->location()->associate($location);
            }

            $employee->save();
            $employee->user()->save($user);

            return $employee;
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
            $user = User::destroy($id);
            return $user;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function destroyMany()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $users = User::destroy($ids);
            return $users;
        });

        return $this->successResponse('delete', $data, 200);
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

    public function activate()
    {
        $ids = request('ids');
        $activation = request("is_active") ? "activated" : "deactivated";
        $data = DB::transaction(function () use ($ids, $activation) {
            $data_items = User::findOrFail($ids);
            $data_items->each(function ($item) use ($activation) {
                $item->is_active = request("is_active");
                $item->save();
            });
            return $data_items;
        });

        return $this->successResponse('update', $data, 200);
    }
}
