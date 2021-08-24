<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Department\DepartmentStoreRequest;
use App\Http\Requests\Department\DepartmentUpdateRequest;
use App\Http\Resources\DepartmentResource;
use App\Models\Department;
use App\Models\User;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DepartmentController extends Controller
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
        $sortBy = request('sortBy') ?? "code";
        $sortType = request('sortType') ?? "asc";
        $itemsPerPage = request('itemsPerPage') ?? 10;

        $departments = Department::with("manager")
            ->search($search)
            ->orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch (request('status')) {
                case 'Deleted':
                    $departments = $departments->onlyTrashed();
                    break;
                case 'Inactive':
                    $departments = $departments->where('is_active', false);
                    break;
                default:
                    $departments = $departments->where('is_active', true);
                    break;
            }
        }

        $departments = $departments->paginate($itemsPerPage);

        return $this->successResponse('read', $departments, 200);
        // return $this->successResponse('Success', DepartmentResource::collection($departments), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DepartmentStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $user = User::findOrFail($validated['manager_id']);
            $code = 'DEP' . date("YmdHis");
            $slug = $code . '-' . implode('-', explode(' ', $validated['name']));

            $department = new Department();
            $department->fill($validated);
            $department->code = $code;
            $department->slug = $slug;

            $department->manager()->associate($user->profile);

            $department->save();

            return $department;
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
        $department = Department::with(["manager" => function ($query) {
            $query->with("user");
        }])->findOrFail($id);
        return $this->successResponse('read', new DepartmentResource($department), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(DepartmentUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($id, $validated) {
            $user = User::findOrFail($validated['manager_id']);

            $department = Department::findOrFail($id);
            $department->fill($validated);
            $department->slug = $department->code . '-' . implode('-', explode(' ', $validated['name']));

            $department->manager()->associate($user->profile);

            $department->save();
            return $department;
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
            $department = Department::destroy($id);
            return $department;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function destroyMany()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $departments = Department::destroy($ids);
            return $departments;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function activate()
    {
        $ids = request('ids');
        $activation = request("is_active") ? "activated" : "deactivated";
        $data = DB::transaction(function () use ($ids, $activation) {
            $data_items = Department::findOrFail($ids);
            $data_items->each(function ($item) use ($activation) {
                $item->is_active = request("is_active");
                $item->save();
            });
            return $data_items;
        });

        return $this->successResponse('update', $data, 200);
    }
}
