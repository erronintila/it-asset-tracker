<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Customer\CustomerStoreRequest;
use App\Http\Requests\Customer\CustomerUpdateRequest;
use App\Http\Resources\UserResource;
use App\Models\Customer;
use App\Models\User;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
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

        $sortBy = request('sortBy') ?? "name";
        $sortType = request('sortType') ?? "asc";
        $itemsPerPage = request('itemsPerPage') ?? 10;

        $users = User::with(['profile' => function ($query) {
            $query->with(['user']);
        }])->where('profile_type', 'App\Models\Customer')
            ->orderBy($sortBy, $sortType)
            ->paginate($itemsPerPage);

        return $this->successResponse('read', $users, 200);
        // return $this->successResponse('Success', UserResource::collection($users), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CustomerStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $code = 'CUS' . date("YmdHis");
            $slug = $code . '-' . implode('-', explode(' ', $validated['name']));

            $user = new User();
            $user->type = "customer";
            $user->name = $validated['name'];
            $user->username = $code;
            $user->email = $validated['email'] ?? null;
            $user->password = bcrypt('password');

            $customer = new Customer();
            $customer->fill(Arr::except($validated, ['email']));
            $customer->code = $code;
            $customer->slug = $slug;
            $customer->save();
            $customer->user()->save($user);

            return $customer;
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
        // $user = User::findOrFail($id);
        $user = User::with(['profile' => function ($query) {
            $query->with('location');
        }])
            ->where('profile_type', 'App\Models\Customer')
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
    public function update(CustomerUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($id, $validated) {
            $user = User::findOrFail($id);
            $slug = $user->profile->code . '-' . implode('-', explode(' ', $validated['name']));

            $user->type = "customer";
            $user->name = $validated['name'];
            $user->email = $validated['email'] ?? null;
            // $user->save();

            $customer = Customer::findOrFail($user->profile->id);
            $customer->fill(Arr::except($validated, ['email']));
            $customer->slug = $slug;
            $customer->save();
            $customer->user()->save($user);

            return $customer;
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
}
