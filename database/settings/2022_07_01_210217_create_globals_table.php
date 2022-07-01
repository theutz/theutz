<?php

use Spatie\LaravelSettings\Migrations\SettingsBlueprint;
use Spatie\LaravelSettings\Migrations\SettingsMigration;

class CreateGlobalsTable extends SettingsMigration
{
    public function up(): void
    {
        $this->migrator->inGroup('globals', function (SettingsBlueprint $blueprint) {
            $blueprint->add('title',       fake()->sentence());
            $blueprint->add('description', fake()->paragraph());
            $blueprint->add('bio',         fake()->paragraph());
            $blueprint->add('facebook',    fake()->url());
            $blueprint->add('instagram',   fake()->url());
            $blueprint->add('twitter',     fake()->url());
            $blueprint->add('linkedin',    fake()->url());
            $blueprint->add('email',       fake()->email());
        });
    }

    public function down(): void
    {
        $this->migrator->inGroup('globals', function (SettingsBlueprint $blueprint) {
            $blueprint->delete('title');
            $blueprint->delete('description');
            $blueprint->delete('bio');
            $blueprint->delete('facebook');
            $blueprint->delete('instagram');
            $blueprint->delete('twitter');
            $blueprint->delete('linkedin');
            $blueprint->delete('email');
        });
    }
}
