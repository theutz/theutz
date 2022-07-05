@props(['start', 'end'])

<time datetime="{{ $start }}{{ $end }}" {{ $attributes->class(["-order-1 font-mono text-sm leading-7 text-slate-500"]) }}>
    {{ $start->isoFormat('MMM Y') }}
    -
    @isset ($end)
    {{ $end->isoFormat('MMM Y') }}
    @else
    {{ __('Current') }}
    @endisset
    |
    {{ $start->longAbsoluteDiffForHumans($end, 2) }}
</time>
