import { style } from '@angular/core';

export const collapsedBody = style({
    height: 0,
    padding: 0,
    opacity: 0,
    transform: 'scaleY(0)',
    'transform-origin': '100% 0%'
});
