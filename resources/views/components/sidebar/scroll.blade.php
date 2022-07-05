<div class="relative z-10 px-4 pt-10 pb-4 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:py-12 lg:px-8 xl:px-12">
    <a href="/" class="relative block w-48 mx-auto overflow-hidden rounded-lg shadow-xl bg-slate-200 shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl" aria-label="Homepage">
        <img src="{{ Storage::url(config('site.logo')) }}" alt="" layout="responsive" sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem" priority />
        <div class="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl"></div>
    </a>

    <div class="mt-10 text-center lg:mt-12 lg:text-left">
        <p class="text-xl font-bold text-slate-900">
            <a href="/">{{ config('site.title') }}</a>
        </p>
        <p class="mt-3 text-lg font-medium leading-8 text-slate-700">
            <x-markdown>
                {{ config('site.description') }}
            </x-markdown>
        </p>
    </div>
    <x-sections.about class="hidden mt-12 lg:block" />
    <section class="mt-10 lg:mt-12">
        <h2 class="flex items-center font-mono text-sm font-medium leading-7 sr-only text-slate-900 lg:not-sr-only">
            <svg aria-hidden="true" class="h-2.5 w-2.5">
                <path d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z" class="fill-indigo-300" />
                <path d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z" class="fill-blue-300" />
            </svg>
            <span class="ml-2.5">Links</span>
        </h2>
        <div class="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden"></div>
        <ul class="flex justify-center mt-4 space-x-10 text-base font-medium leading-7 text-slate-700 sm:space-x-8 lg:block lg:space-x-0 lg:space-y-4">
            @foreach(config('site.links') as $name => $url)
            <li class="flex">
                <a href="{{ $url }}" class="flex items-center group">
                    <x-dynamic-component component="simpleicon-{{ $name }}" class="w-8 h-8 fill-slate-400 group-hover:fill-slate-600" />
                    <span class="sr-only sm:hidden">{{ ucfirst($name) }}</span>
                    <span class="hidden sm:ml-3 sm:block">{{ ucfirst($name) }}</span>
                </a>
            </li>
            @endforeach
        </ul>
    </section>
</div>
