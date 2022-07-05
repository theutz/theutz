<x-guest-layout>
    <article class="py-16 lg:py-36">
        <x-container>
            <header class="flex flex-col">
                <div class="flex items-center gap-6">
                    <div class="flex flex-col">
                        <h1 class="mt-2 text-4xl font-bold text-slate-900">
                            {{ __(':Title at :Company', [
                                'title' => $experience->job_title,
                                'company' => $experience->company_name
                            ])}}
                        </h1>
                        <x-date-range :start="$experience->start_date" :end="$experience->end_date" />
                    </div>
                </div>
                <p class="mt-3 text-lg font-medium leading-8 text-slate-700">
                    {{ $experience->brief }}
                </p>
            </header>
            <hr class="my-12 border-gray-200" />
            <div class="prose prose-slate mt-14 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2:nth-of-type(3n)]:before:bg-violet-200" />
            <x-markdown>
                {{ $experience->content }}
            </x-markdown>
            </div>
            <nav class="mt-16 flex text-sm justify-around">
                <a @if($experience->prev)
                    href="{{ route('experiences.show', ['experience' => $experience->prev ]) }}"
                    @endif
                    @class(['text-pink-500' => $experience->prev, 'text-slate-200' => !$experience->prev])
                >
                    @if($experience->prev)
                         &larr;
                        {{ $experience->prev->title }}
                    @endif
                </a>
                <a @if($experience->next)
                    href="{{ route('experiences.show', ['experience' => $experience->next ]) }}"
                    @endif
                    @class(['text-pink-500' => $experience->next, 'text-slate-200' => !$experience->next])
                >
                    @if ($experience->next)
                        {{ $experience->next->title }}
                        &rarr;
                    @endif
                </a>
            </nav>
        </x-container>
    </article>
</x-guest-layout>
