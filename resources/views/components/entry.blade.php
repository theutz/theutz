<article aria-labelledby="item-{{ $id ?? $slug }}-title"
         class="py-10 sm:py-12">
    <x-container>
        <div class="flex flex-col items-start">
            <h2
                {{ $title->attributes->class(["mt-2 text-lg font-bold text-slate-900 flex flex-col sm:flex-row w-full"]) }}
                id="item-{{ $id ?? $slug }}-title"
            >
                <a href="/{{ $slug }}">{{ $title }}</a>
            </h2>
            @isset($time)
                <time
                    {{ $time->attributes->class(["font-mono text-sm leading-7 -order-1 text-slate-500"]) }}
                >
                    {{ $time }}
                </time>
            @endisset
            <p class="mt-1 text-base leading-7 text-slate-700">
                {{ $slot }}
            </p>
            <div class="flex items-center gap-4 mt-4">
                <a href="/{{ $slug }}"
                   class="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900">
                    {{ __("Show more") }}
                </a>
            </div>
        </div>
    </x-container>
</article>
