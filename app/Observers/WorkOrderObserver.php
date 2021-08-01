<?php

namespace App\Observers;

use App\Models\WorkOrder;

class WorkOrderObserver
{
    /**
     * Handle the work order "created" event.
     *
     * @param  \App\WorkOrder  $workOrder
     * @return void
     */
    public function created(WorkOrder $workOrder)
    {
        //
    }

    /**
     * Handle the work order "updated" event.
     *
     * @param  \App\WorkOrder  $workOrder
     * @return void
     */
    public function updated(WorkOrder $workOrder)
    {
        $orig_actual_start_date = $workOrder->getOriginal("actual_start_date");
        $orig_actual_end_date = $workOrder->getOriginal("actual_start_date");
        $actual_start_date = $workOrder->actual_start_date;
        $actual_end_date = $workOrder->actual_end_date;

        if ($orig_actual_start_date == null && $actual_start_date) {
            if ($orig_actual_end_date == null && $actual_end_date == null) {
                $workOrder->transaction->parent_asset->is_under_maintenance = true;
                $workOrder->transaction->parent_asset->save();
            }
        }
    }

    /**
     * Handle the work order "deleted" event.
     *
     * @param  \App\WorkOrder  $workOrder
     * @return void
     */
    public function deleted(WorkOrder $workOrder)
    {
        //
    }

    /**
     * Handle the work order "restored" event.
     *
     * @param  \App\WorkOrder  $workOrder
     * @return void
     */
    public function restored(WorkOrder $workOrder)
    {
        //
    }

    /**
     * Handle the work order "force deleted" event.
     *
     * @param  \App\WorkOrder  $workOrder
     * @return void
     */
    public function forceDeleted(WorkOrder $workOrder)
    {
        //
    }
}
