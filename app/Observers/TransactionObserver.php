<?php

namespace App\Observers;

use App\Models\Transaction;

class TransactionObserver
{
    /**
     * Handle the transaction "created" event.
     *
     * @param  \App\Transaction  $transaction
     * @return void
     */
    public function created(Transaction $transaction)
    {
        //
    }

    /**
     * Handle the transaction "updated" event.
     *
     * @param  \App\Transaction  $transaction
     * @return void
     */
    public function updated(Transaction $transaction)
    {
        if ($transaction->getOriginal("posted_at") == null && $transaction->posted_at) {
            $transaction->assets->each(function ($item) use ($transaction) {
                $action_type = $transaction->transaction_type->action_type;

                switch ($action_type) {
                    case 'maintenance':
                        $item->is_under_maintenance = false;
                        break;
                    case 'disposal':
                        $item->disposed_at = now();
                        break;
                    case 'checkout':
                        $item->assigned_location_id = $transaction->assigned_location_id;
                        $item->assigned_user_id = $transaction->assigned_user_id;
                        break;
                    case 'checkin':
                        $item->assigned_location_id = $transaction->assigned_location_id;
                        $item->assigned_user_id = $transaction->assigned_user_id;
                        break;
                    default:
                        break;
                }

                $item->save();
            });
        }
    }

    /**
     * Handle the transaction "deleted" event.
     *
     * @param  \App\Transaction  $transaction
     * @return void
     */
    public function deleted(Transaction $transaction)
    {
        //
    }

    /**
     * Handle the transaction "restored" event.
     *
     * @param  \App\Transaction  $transaction
     * @return void
     */
    public function restored(Transaction $transaction)
    {
        //
    }

    /**
     * Handle the transaction "force deleted" event.
     *
     * @param  \App\Transaction  $transaction
     * @return void
     */
    public function forceDeleted(Transaction $transaction)
    {
        //
    }
}
