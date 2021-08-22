<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ReviewCategory\ReviewCategoryStoreRequest;
use App\Http\Requests\ReviewCategory\ReviewCategoryUpdateRequest;
use App\Http\Resources\ReviewCategoryResource;
use App\Models\ReviewCategory;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReviewCategoryController extends Controller
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

        $review_categories = ReviewCategory::search($search)
            ->orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch (request('status')) {
                case 'Deleted':
                    $review_categories = $review_categories->onlyTrashed();
                    break;
                case 'Inactive':
                    $review_categories = $review_categories->where('is_active', false);
                    break;
                default:
                    $review_categories = $review_categories->where('is_active', true);
                    break;
            }
        }

        $review_categories = $review_categories->paginate($itemsPerPage);

        return $this->successResponse('read', $review_categories, 200);
        // return $this->successResponse('Success', ReviewCategoryResource::collection($review_categories), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ReviewCategoryStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $code = 'RCA' . date("YmdHis");
            $slug = $code . '-' . implode('-', explode(' ', $validated['name']));

            $review_category = new ReviewCategory();
            $review_category->fill($validated);
            $review_category->code = $code;
            $review_category->slug = $slug;
            $review_category->save();

            return $review_category;
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
        $review_category = ReviewCategory::findOrFail($id);
        return $this->successResponse('read', new ReviewCategoryResource($review_category), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ReviewCategoryUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($id, $validated) {
            $review_category = ReviewCategory::findOrFail($id);
            $review_category->fill($validated);
            $review_category->slug = $review_category->code . '-' . implode('-', explode(' ', $validated['name']));
            $review_category->save();
            return $review_category;
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
            $review_category = ReviewCategory::destroy($id);
            return $review_category;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function destroyMany()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $review_categories = ReviewCategory::destroy($ids);
            return $review_categories;
        });

        return $this->successResponse('delete', $data, 200);
    }
}
