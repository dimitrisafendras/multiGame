import React from 'react';
import { InlineSvg } from 'components/inline-svg';

export const Tube = InlineSvg(require('!!raw!./tube.svg'));
export const Bus = InlineSvg(require('!!raw!./bus.svg'));
export const Taxi = InlineSvg(require('!!raw!./taxi.svg'));

export default {
  Tube: <Tube />,
  Bus: <Bus />,
  Taxi: <Taxi />,
};
