<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Review\ReviewStoreRequest;
use App\Http\Requests\Review\ReviewUpdateRequest;
use App\Http\Resources\ReviewResource;
use App\Models\Asset;
use App\Models\Feature;
use App\Models\Review;
use App\Models\ReviewCategory;
use App\Models\User;
use App\Traits\HttpResponseMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReviewController extends Controller
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

        $reviews = Review::search($search)
            ->orderBy($sortBy, $sortType);

        if (request()->has('status')) {
            switch (request('status')) {
                case 'Deleted':
                    $reviews = $reviews->onlyTrashed();
                    break;
                case 'Inactive':
                    $reviews = $reviews->where('is_active', false);
                    break;
                default:
                    $reviews = $reviews->where('is_active', true);
                    break;
            }
        }

        $reviews = $reviews->paginate($itemsPerPage);

        return $this->successResponse('read', $reviews, 200);
        // return $this->successResponse('Success', ReviewResource::collection($reviews), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ReviewStoreRequest $request)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($validated) {
            $code = 'REV' . date("YmdHis");
            // $slug = $code . '-' . implode('-', explode(' ', $validated['description']));
            $user = User::findOrFail($validated['user_id']);
            $review_category = ReviewCategory::findOrFail($validated['review_category_id']);
            $asset = Asset::findOrFail($validated['asset_id']);

            $review = new Review();
            // $review->fill($validated);
            $review->code = $code;
            // $review->slug = $slug;
            $review->reference_no = $validated['reference_no'];
            $review->date = $validated['date'];
            $review->description = $validated['description'];

            $review->user()->associate($user);
            $review->review_category()->associate($review_category);
            $review->asset()->associate($asset);

            $review->save();

            $newArray = [];

            foreach ($validated["features"] as $item) {
                $feature_item = Feature::findOrFail($item["id"]);
                $arr[$feature_item->id] = ['rating' => $item["rating"], 'remarks' => $item["remarks"]];
            }

            $review->features()->sync($newArray);

            return $review;
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
        $review = Review::findOrFail($id);
        return $this->successResponse('read', new ReviewResource($review), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ReviewUpdateRequest $request, $id)
    {
        $validated = $request->validated();
        $data = DB::transaction(function () use ($id, $validated) {
            $user = User::findOrFail($validated['user_id']);
            $review_category = ReviewCategory::findOrFail($validated['review_category_id']);
            $asset = Asset::findOrFail($validated['asset_id']);
            $review = Review::findOrFail($id);
            // $review->fill($validated);
            // $review->slug = $review->code . '-' . implode('-', explode(' ', $validated['description']));
            $review->reference_no = $validated['reference_no'];
            $review->date = $validated['date'];
            $review->description = $validated['description'];

            $review->user()->associate($user);
            $review->review_category()->associate($review_category);
            $review->asset()->associate($asset);

            $review->save();

            $review->features()->sync($validated['features']);

            return $review;
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
            $review = Review::destroy($id);
            return $review;
        });

        return $this->successResponse('delete', $data, 200);
    }

    public function destroyMany()
    {
        $ids = request('ids');
        $data = DB::transaction(function () use ($ids) {
            $reviews = Review::destroy($ids);
            return $reviews;
        });

        return $this->successResponse('delete', $data, 200);
    }
}
