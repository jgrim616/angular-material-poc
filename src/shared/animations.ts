import {
  animate,
  state,
  style,
  transition,
  trigger,
  stagger,
  query
} from '@angular/animations';

export const grow = trigger('grow', [
  state('no', style({ transform: 'scale(1)' })),
  state('yes', style({ transform: 'scale(1.1)' })),
  transition('* => *', animate('100ms ease-in'))
]);

export const grow2 = (duration = 200, easing = 'linear') => {
  return trigger('grow2', [
    state('no', style({ transform: 'scale(1)' })),
    state('yes', style({ transform: 'scale(1,4)' })),
    transition('* => *', animate('${duration}ms ${easing}'))
  ]);
};

export const slide = trigger('slide', [
  state('in', style({ transform: 'translate3d(0, 0, 0)' })),
  state('out', style({ transform: 'translate3d(150%, 0, 0)' })),
  transition('in => out', animate('200ms ease-in')),
  transition('out => in', animate('200ms ease-out'))
]);

export const minimize = trigger('minimize', [
  state('down', style({ transform: 'translate3d(0, 0, 0)' })),
  state('up', style({ transform: 'translate3d(0, -150%, 0)' })),
  transition('up => down', animate('200ms ease-in')),
  transition('* => up', animate('200ms ease-out'))
]);

export const fade = trigger('fade', [
  state('no', style({ opacity: 1 })),
  state('yes', style({ opacity: 0.1 })),
  transition('* => *', animate('200ms linear'))
]);
