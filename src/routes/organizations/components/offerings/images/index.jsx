import React from 'react';
import { InlineSvg } from 'components/common/inline-svg';

export const Dreamteam = InlineSvg(require('!!raw!./dreamteam'));
export const Tailormade = InlineSvg(require('!!raw!./tailormade'));
export const Techs = InlineSvg(require('!!raw!./techs'));
export const Grow = InlineSvg(require('!!raw!./grow'));

export default {
  Dreamteam: <Dreamteam />,
  Tailormade: <Tailormade />,
  Techs: <Techs />,
  Grow: <Grow />,
};
