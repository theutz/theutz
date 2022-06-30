<section {{ $attributes }}
         x-data="{ isExpanded: false }">
    <h2 class="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
        <svg aria-hidden="true"
             class="h-2.5 w-2.5">
            <path d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                  class="fill-violet-300" />
            <path d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                  class="fill-pink-300" />
        </svg>
        <span class="ml-2.5">About</span>
    </h2>
    <p class="mt-2 text-base leading-7 text-slate-700"
       :class="{ 'lg:line-clamp-4': !isExpanded }">
        In this show, Eric and Wes dig deep to get to the facts with guests who
        have been labeled villains by a society quick to judge, without actually
        getting the full story. Tune in every Thursday to get to the truth with
        another misunderstood outcast as they share the missing context in their
        tragic tale.
    </p>
    <button x-show="!isExpanded"
            type="button"
            class="hidden mt-2 text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block"
            @="isExpanded = true">
        Show more
    </button>
</section>
