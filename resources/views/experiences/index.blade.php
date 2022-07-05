<x-guest-layout>
    <x-slot:heading>
        {{ __('Experience') }}
    </x-slot:heading>

    @foreach($items as $item)
        @php
            $link = '/experiences/'.$item->slug;
        @endphp

        <x-entry :id="$loop->iteration"
                 :link="$link"
                 :start="$item->start_date"
                 :end="$item->end_date"
        >
            <x-slot:heading>
                {{ __(':Title at :Company', ['title' => $item->job_title, 'company' => $item->company_name]) }}
            </x-slot:heading>

            <x-slot:subheading>
                {{ $item->brief }}
            </x-slot:subheading>

            {{ $item->content }}
        </x-entry>
    @endforeach

</x-guest-layout>
