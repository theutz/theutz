<header class="flex flex-col">
    <div class="flex items-center gap-6">
        <div class="flex flex-col">
            <h1 class="mt-2 text-4xl font-bold text-slate-900">
                {{ $experience->title }}
            </h1>
            <time dateTime={date.toISOString()} class="-order-1 font-mono text-sm leading-7 text-slate-500">
                <x-date-range :start="$experience->start_date" :end="$experience->end_date" />
            </time>
        </div>
    </div>
    <p class="ml-24 mt-3 text-lg font-medium leading-8 text-slate-700">
        {{ $experience->description }}
    </p>
</header>
