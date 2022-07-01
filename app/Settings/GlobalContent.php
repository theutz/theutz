<?php

namespace App\Settings;

use Spatie\LaravelSettings\Settings;

class Globals extends Settings
{
    public string $title;
    public string $description;
    public string $bio;
    public string $facebook;
    public string $instagram;
    public string $twitter;
    public string $linkedin;
    public string $email;

    public static function group(): string
    {
        return 'globals';
    }
}
