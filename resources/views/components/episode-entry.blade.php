<article aria-labelledby="episode-{{ $episode->id }}-title"
         class="py-10 sm:py-12">
    <x-container>
        <div class="flex flex-col items-start">
            <h2 id="episode-{{ $episode->id }}-title"
                class="mt-2 text-lg font-bold text-slate-900">
                <a href="/{{ $episode->id }}">{{ $episode->title }}</a>
            </h2>
            <time dateTime="{{ $episode->published->toISOString() }}"
                  class="font-mono text-sm leading-7 -order-1 text-slate-500">
                {{ $episode->published->toFormattedDateString() }}
            </time>
            <p class="mt-1 text-base leading-7 text-slate-700">
                {{ $episode->description }}
            </p>
            <div class="flex items-center gap-4 mt-4">
                <a href="/{{ $episode->id }}"
                   class="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900">
                    Show notes
                </a>
            </div>
        </div>
    </x-container>
</article>
