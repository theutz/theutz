<?php

namespace App\Providers;

use Blade;
use Filament\Facades\Filament;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Filament::registerRenderHook('head.end', fn (): string => Blade::render(
            <<<END
                <link rel="shortcut icon" href="{{ Storage::url(config('site.logo')) }}" />
            END
        ));
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
    }
}
