<x-guest-layout>
    <x-slot:title>
        Episodes
    </x-slot:title>

    @each('components.episode-entry', $episodes, 'episode')

</x-guest-layout>
