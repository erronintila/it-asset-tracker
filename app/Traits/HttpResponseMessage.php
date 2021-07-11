<?php

namespace App\Traits;

trait HttpResponseMessage
{
    protected function successResponse($message = "", $data = [], $status = 200)
    {
        return response([
            'success' => true,
            'data' => $data,
            'message' => $message,
        ], $status);
    }

    protected function errorResponse($message = "", $data = [], $status = 422)
    {
        return response([
            'success' => false,
            'data' => $data,
            'message' => $message,
        ], $status);
    }
}
