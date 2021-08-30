<?php

namespace App\Rules;

use App\Models\Feature;
use App\Models\ReviewCategory;
use Illuminate\Contracts\Validation\Rule;

class UniqueInCategory implements Rule
{
    private $review_category_id;
    private $name;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($review_category_id, $name)
    {
        $this->review_category_id = $review_category_id;
        $this->name = $name;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $features = Feature::where("name", $this->name)
            ->where("review_category_id", $this->review_category_id)
            ->get();
        return count($features) > 0 ? false : true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The name must be unique in a review category.';
    }
}
