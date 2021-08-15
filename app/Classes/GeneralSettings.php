<?php

namespace App\Classes;

use Spatie\LaravelSettings\Settings;

class GeneralSettings extends Settings
{
    public string $site_name;
    public bool $site_active;

    public static function group(): string
    {
        return 'general';
    }

    public static function repository(): ?string
    {
        return 'settings';

        return response();
    }
}
