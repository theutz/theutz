<x-guest-layout>
    <x-slot:title>
        {{ __('Experience') }}
    </x-slot:title>

    @foreach($items as $item)
        @php $link = '/experiences/'.$item->slug; @endphp
        <x-entry :id="$loop->iteration" :link="$link">
            <x-slot:title>
                {{ __(':Title at :Company', ['title' => $item->job_title, 'company' => $item->company_name]) }}
            </x-slot:title>

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

            {{ $item->brief ?? $item->content }}
        </x-entry>
    @endforeach

</x-guest-layout>
