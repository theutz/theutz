<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $episodes = collect()
        ->range(0, 5)
        ->map(fn() => (object) [
            'published' => now(), 'id' => fake()->uuid(), 'title' => fake()->sentence(), 'description' => fake()->paragraph()
        ]);
    return view('pages.index', ['episodes' => $episodes]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});
