<div class="lg:w-112 xl:w-120 bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:items-start lg:overflow-y-auto">
    <div class="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
        <span class="font-mono text-slate-500">{{ __('Made in') }}</span>
        <span class="flex mt-6 font-bold text-slate-900">
            <span class="after:mt-6 after:text-slate-400 after:content-['/']">
                Seattle
            </span>
            <span class="mt-6 after:mt-6 after:text-slate-400 after:content-['/']">
                Washignton
            </span>
            <span class="mt-6">{{ __('USA') }}</span>
        </span>
    </div>
    <div class="relative z-10 px-4 pt-10 pb-4 mx-auto sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:py-12 lg:px-8 xl:px-12">
        <a href="/" class="relative block w-48 mx-auto overflow-hidden rounded-lg shadow-xl bg-slate-200 shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl" aria-label="Homepage">
            <img src="{{ Storage::url($globals->logo) }}" alt="" layout="responsive" sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem" priority />
            <div class="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl"></div>
        </a>

        <div class="mt-10 text-center lg:mt-12 lg:text-left">
            <p class="text-xl font-bold text-slate-900">
                <a href="/">{{ $globals->title }}</a>
            </p>
            <p class="mt-3 text-lg font-medium leading-8 text-slate-700">
                <x-markdown>
                    {{ $globals->description }}
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
                <li class="flex">
                    <a href="{{ $globals->facebook }}" class="flex items-center group">
                        <x-simpleicon-facebook class="w-8 h-8 fill-slate-400 group-hover:fill-slate-600" />
                        <span class="sr-only sm:hidden">Facebook</span>
                        <span class="hidden sm:ml-3 sm:block">Facebook</span>
                    </a>
                </li>
                <li class="flex">
                    <a href="{{ $globals->twitter }}" class="flex items-center group">
                        <x-simpleicon-twitter class="w-8 h-8 fill-slate-400 group-hover:fill-slate-600" />
                        <span class="sr-only sm:hidden">Twitter</span>
                        <span class="hidden sm:ml-3 sm:block">Twitter</span>
                    </a>
                </li>
                <li class="flex">
                    <a href="{{ $globals->linkedin }}" class="flex items-center group">
                        <x-simpleicon-linkedin class="w-8 h-8 fill-slate-400 group-hover:fill-slate-600" />
                        <span class="sr-only sm:hidden">Linkedin</span>
                        <span class="hidden sm:ml-3 sm:block">Linkedin</span>
                    </a>
                </li>
                <li class="flex">
                    <a href="{{ $globals->instagram }}" class="flex items-center group">
                        <x-simpleicon-instagram class="w-8 h-8 fill-slate-400 group-hover:fill-slate-600" />
                        <span class="sr-only sm:hidden">Instagram</span>
                        <span class="hidden sm:ml-3 sm:block">Instagram</span>
                    </a>
                </li>
            </ul>
        </section>
    </div>
</div>
<div class="border-t lg:ml-112 xl:ml-120 border-slate-200 lg:relative lg:mb-28 lg:border-t-0">
    <x-svg.waveform />
    <div class="relative">{{ $slot }}</div>
</div>
<div class="py-10 pb-40 border-t border-slate-200 bg-slate-50 sm:py-16 sm:pb-32 lg:hidden">
    <div class="px-4 mx-auto sm:px-6 md:max-w-2xl md:px-4">
        <x-sections.about />
        <h2 class="flex items-center mt-8 font-mono text-sm font-medium leading-7 text-slate-900">
            <svg aria-hidden="true" viewBox="0 0 11 12" class="w-auto h-3 fill-slate-300">
                <path d="M5.019 5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm3.29 7c1.175 0 2.12-1.046 1.567-2.083A5.5 5.5 0 0 0 5.019 7 5.5 5.5 0 0 0 .162 9.917C-.39 10.954.554 12 1.73 12h6.578Z" />
            </svg>
            <span class="ml-2.5">{{ __('Made in') }}</span>
        </h2>
        <div class="flex mt-2 text-sm font-bold leading-7 text-slate-900">
            <span class="after:ml-6 after:text-slate-400 after:content-['/']">
                Seattle
            </span>
            <span class="ml-6 after:ml-6 after:text-slate-400 after:content-['/']">
                Washington
            </span>
            <span class="ml-6">USA</span>
        </div>
    </div>
</div>
<div class="fixed inset-x-0 bottom-0 right-0 z-10 rounded-lg lg:left-112 xl:left-120">
    <AudioPlayer />
</div>
