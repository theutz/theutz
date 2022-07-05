<article aria-labelledby="item-{{ $id }}-heading" class="py-10 sm:py-12">
    <x-container>
        <div class="flex flex-col items-start">
            @isset($heading)
            <h2 {{ $heading->attributes->class(["mt-2 text-lg font-bold text-slate-900 flex flex-col sm:flex-row w-full"]) }} id="item-{{ $id }}-heading">
                <a href="{{ $link }}">
                    {{ $heading }}
                </a>
            </h2>
            @endisset

            <x-date-range :start="$start" :end="$end" />

            @isset($subheading)
            <p class="mt-1 text-base leading-7 text-slate-700">
                {{ $subheading }}
            </p>
            @endisset
            <div class="prose line-clamp-2">
                <x-markdown>
                    {{ $slot }}
                </x-markdown>
            </div>
            <div class="flex items-center gap-4 mt-4">
                <a class="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900" href="{{ $link }}">
                    {{ __("Show more") }}
                </a>
            </div>
        </div>
    </x-container>
</article>
