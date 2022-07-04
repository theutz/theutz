<x-guest-layout>
    <x-slot:title>
        {{ __('Experience') }}
    </x-slot:title>

    @foreach($items as $item)
        <x-entry :title="$item->title" :slug="$item->id">
            <x-slot:time>
                {{ $item->start_date->isoFormat('MMM Y') }}
                -
                @isset ($item->end_date)
                    {{ $item->end_date->isoFormat('MMM Y') }}
                @else
                    {{ __('Current') }}
                @endisset
                    |
                    {{ $item->start_date->longAbsoluteDiffForHumans($item->end_date) }}
            </x-slot:time>

            {{ $item->content }}
        </x-entry>
    @endforeach

</x-guest-layout>
