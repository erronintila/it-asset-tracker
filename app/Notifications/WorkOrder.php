<?php

namespace App\Notifications;

use App\Models\Transaction;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Auth\User;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class WorkOrder extends Notification
{
    use Queueable;
    private $details;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($details)
    {
        $this->details = $details;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->line('The introduction to the notification.')
            ->action('Notification Action', url('/'))
            ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        $record = "Checkin Request";
        $action = $this->details["action"] ?? "";
        $data = $this->details['data'];
        $transaction = Transaction::find($data->id);
        $user = User::find($data->user_id);
        $description = "";

        switch ($action) {
            case 'create':
                $description = "Created {$record}";
                break;
            case 'update':
                $description = "Updated {$record}";
                break;
            case 'approve':
                $description = "Approved {$record}";
                break;
            case 'complete':
                $description = "Completed {$record}";
                break;
            case 'post':
                $description = "Posted  {$record}";
                break;
            case 'cancel':
                $description = "Cancelled {$record}";
                break;
            case 'delete':
                $description = "Deleted {$record}";
                break;
            case 'restore':
                $description = "Restored {$record}";
                break;
            default:
                break;
        }

        return [
            'data' => [
                "model" => "transactions",
                "id" => $transaction->id,
                "code" => $transaction->code,
                "user" => [
                    "id" => $user->id,
                    "name" => $user->name
                ],
                'transaction' => [
                    "id" => $transaction->id,
                    "code" => $transaction->code,
                ],
                "description" => $description
            ]
        ];
    }
}
