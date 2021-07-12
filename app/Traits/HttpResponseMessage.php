<?php

namespace App\Traits;

trait HttpResponseMessage
{
    protected function successResponse($message = "", $data = [], $status = 200)
    {
        switch ($message) {
            case 'create':
                $message = "Successfully created.";
                break;
            case 'read':
                $message = "Successfully retrieved.";
                break;
            case 'update':
                $message = "Successfully updated.";
                break;
            case 'delete':
                $message = "Successfully deleted.";
                break;
            case 'restore':
                $message = "Successfully restored.";
                break;
            case 'approve':
                $message = "Successfully approved.";
                break;
            case 'cancel':
                $message = "Successfully cancelled.";
                break;
            default:
                $message = $message;
                break;
        }

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
