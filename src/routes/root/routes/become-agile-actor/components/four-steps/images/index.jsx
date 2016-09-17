import React from 'react';
import { InlineSvg } from 'components/inline-svg';

export const Target = InlineSvg(require('!!raw!./target'));
export const Measure = InlineSvg(require('!!raw!./measure'));
export const Prioritize = InlineSvg(require('!!raw!./prioritize'));
export const Act = InlineSvg(require('!!raw!./act'));

export default {
  Target: <Target />,
  Measure: <Measure />,
  Prioritize: <Prioritize />,
  Act: <Act />,
};
