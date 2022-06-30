@php
    $barCount = 100;
    $barWidth = 2;
    $barGap = 2;
    $seed = 1;
    $lengths = collect()->range(0, $barCount)->map(function () use (&$seed) {
        $min = 40;
        $max = 100;
        $rand = sin($seed++)  * 10000;
        $rand = $rand - floor($rand);

        return floor($rand * ($max - $min + 1) + $min);
    });
@endphp

<svg aria-hidden="true" class="absolute left-0 top-0 h-20 w-full">
  <defs>
    <linearGradient id="waveform-fade" x1="0" x2="0" y1="0" y2="1">
      <stop offset="40%" stop-color="white"></stop>
      <stop offset="100%" stop-color="black"></stop>
    </linearGradient>
    <linearGradient id="waveform-gradient">
      <stop offset="0%" stop-color="#4989E8"></stop>
      <stop offset="50%" stop-color="#6159DA"></stop>
      <stop offset="100%" stop-color="#FF54AD"></stop>
    </linearGradient>
    <mask id="waveform-mask">
      <rect width="100%" height="100%" fill="url(#waveform-pattern)"></rect>
    </mask>
    <pattern
      id="waveform-pattern"
      width="{{ $barCount * $barWidth + $barCount * $barGap }}"
      height="100%"
      patternUnits="userSpaceOnUse"
    >
        @foreach ($lengths as $index => $height)
            <rect
                width="{{ $barWidth }}"
                height="{{ $height }}"
                x="{{ $barGap * ($index + 1) + $barWidth * $index }}"
                fill="url(#waveform-fade)"
            ></rect>
        @endforeach
    </pattern>
  </defs>
  <rect
    width="100%"
    height="100%"
    fill="url(#waveform-gradient)"
    mask="url(#waveform-mask)"
    opacity="0.25"
  />
</svg>
