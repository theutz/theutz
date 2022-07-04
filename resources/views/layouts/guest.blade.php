<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('site.title') }}</title>
    <link rel="shortcut icon" href="{{ Storage::url(config('site.logo')) }}" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap" />

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    <div class="lg:w-112 xl:w-120 bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:items-start lg:overflow-y-auto">
        <x-sidebar.sticky />
        <x-sidebar.scroll />
    </div>
    <div class="border-t lg:ml-112 xl:ml-120 border-slate-200 lg:relative lg:mb-28 lg:border-t-0">
        <x-svg.waveform />
        <div class="relative">
            <div class="pt-16 pb-12 sm:pb-4 lg:pt-12">
                <x-container>
                    <h1 class="text-2xl font-bold leading-7 text-slate-900">
                        {{ $title }}
                    </h1>
                </x-container>

                <div class="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
                    {{ $slot }}
                </div>
            </div>
        </div>
    </div>
    <x-footer.mobile />
</body>

</html>
