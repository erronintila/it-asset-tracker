<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

class CreatePrintSettings extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('print.page_size', 'a4');
        $this->migrator->add('print.orientation', 'portrait');
    }
}
