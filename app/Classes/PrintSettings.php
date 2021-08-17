<?php

namespace App\Classes;

use Spatie\LaravelSettings\Settings;

class PrintSettings extends Settings
{
    public string $paper_size;
    public string $orientation;

    public static function group(): string
    {
        return 'print';
    }
}
