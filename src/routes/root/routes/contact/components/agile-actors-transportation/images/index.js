import React from 'react';
import { InlineSvg } from 'components/inline-svg';

export const Tube = InlineSvg(require('!!raw!./tube.svg'));
export const Bus = InlineSvg(require('!!raw!./bus.svg'));
export const Taxi = InlineSvg(require('!!raw!./taxi.svg'));
export const TubeActive = InlineSvg(require('!!raw!./tube-active.svg'));
export const BusActive = InlineSvg(require('!!raw!./bus-active.svg'));
export const TaxiActive = InlineSvg(require('!!raw!./taxi-active.svg'));

export default {
  Tube: <Tube />,
  Bus: <Bus />,
  Taxi: <Taxi />,
  TubeActive: <TubeActive />,
  BusActive: <BusActive />,
  TaxiActive: <TaxiActive />,
};
