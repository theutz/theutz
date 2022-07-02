<x-guest-layout>
    <div class="pt-16 pb-12 sm:pb-4 lg:pt-12">
        <x-container>
            <h1 class="text-2xl font-bold leading-7 text-slate-900">
                Episodes
            </h1>
        </x-container>
        <div class="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
            @each('components.episode-entry', $episodes, 'episode')
        </div>
    </div>
</x-guest-layout>
