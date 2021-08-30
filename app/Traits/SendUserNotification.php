<?php

namespace App\Traits;

use App\Models\Employee;
use App\Models\User;
use App\Notifications\CheckinRequest;
use App\Notifications\CheckoutRequest;
use App\Notifications\DisposalRequest;
use App\Notifications\WorkOrder;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;

trait SendUserNotification
{
    protected function sendUserNotification($recipient = null, $type, $data)
    {
        // if (!$recipient->profile) {
        //     // if (!$recipient->profile->department) {
        //     //     return;
        //     // }
        //     return;
        // }

        // if ($recipient->profile) {
        //     // abort(500, "11");
        //     if ($recipient->profile->department) {
        //         // abort(500, "22");
        //         $employee = Employee::find($recipient->profile->department->manager_id);

        //         if ($employee) {
        //             $recipient = $employee->user;
        //         }
        //     }
        // }

        if ($recipient) {
            switch ($type) {
                case 'checkin':
                    Notification::send($recipient, new CheckinRequest([
                        "action" => $data["action"],
                        "data" => $data["data"]
                    ]));
                    break;
                case 'checkout':
                    Notification::send($recipient, new CheckoutRequest([
                        "action" => $data["action"],
                        "data" => $data["data"]
                    ]));
                    break;
                case 'disposal':
                    Notification::send($recipient, new DisposalRequest([
                        "action" => $data["action"],
                        "data" => $data["data"]
                    ]));
                    break;
                case 'work_order':
                    Notification::send($recipient, new WorkOrder([
                        "action" => $data["action"],
                        "data" => $data["data"]
                    ]));
                    break;
                default:
                    break;
            }
        }
    }

    protected function getRecipient($senderType, $directUser = null)
    {
        $recipient = null;
        switch ($senderType) {
            case 'admin':
                if (Auth::user()->profile) {
                    if (Auth::user()->profile->department) {
                        $employee = Employee::find(Auth::user()->profile->department->manager_id);
                        if ($employee) {
                            $recipient = $employee->user;
                        }
                    }
                }
                break;
            default:
                $recipient = $directUser;
                break;
        }

        return $recipient;
    }
}
