<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

class CreateGeneralSettings extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('general.site_name', 'IT Asset Tracker');
        $this->migrator->add('general.site_active', true);
    }
}
