<?php

namespace App\Traits;

use App\Models\User;
use App\Notifications\CheckinRequest;
use App\Notifications\CheckoutRequest;
use App\Notifications\DisposalRequest;
use App\Notifications\WorkOrder;
use Illuminate\Support\Facades\Notification;

trait SendUserNotification
{
    protected function sendUserNotification(User $recipient, $type, $data)
    {
        if (!$recipient->profile) {
            // if (!$recipient->profile->department) {
            //     return;
            // }
            return;
        }

        if ($recipient->profile) {
            if ($recipient->profile->department) {
                $recipient = User::find($recipient->profile->department->manager_id);
            }
        }

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
