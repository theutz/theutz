<?php

use Spatie\LaravelSettings\Migrations\SettingsMigration;

class AddSiteLogo extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->add('globals.logo', fake()->image());
    }

    public function down(): void
    {
        $this->migrator->delete('globals.logo');
    }
}
