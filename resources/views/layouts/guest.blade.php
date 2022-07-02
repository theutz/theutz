<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ $globals->title }}</title>
    <link rel="shortcut icon" href="{{ $globals->logo }}" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&display=swap" />

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body>
    <x-layout>
        {{ $slot }}
    </x-layout>
</body>

</html>
