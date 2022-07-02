<?php

namespace App\Providers;

use App\Settings\Globals;
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
        Filament::registerRenderHook('head.end', fn ():string => Blade::render('<link rel="shortcut icon" href="{{ asset($globals->logo) }}" />'));
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(Globals $globals)
    {
        View::share('globals', $globals);
    }
}
