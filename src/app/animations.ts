import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const componentTransition: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1
      })
    ),
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate('500ms 500ms ease-in')
    ]),
    transition(':leave', [
      animate('500ms ease-out', style({
        opacity: 0
      }))
    ])
  ]);