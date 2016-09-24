import React from 'react';
import { InlineSvg } from 'components/inline-svg';

export const Methodologies = InlineSvg(require('!!raw!./icon-agile-methodologies.svg'));
export const UiUx = InlineSvg(require('!!raw!./icon-ux-ui.svg'));
export const SwDevelopment = InlineSvg(require('!!raw!./icon-sw-development.svg'));
export const Coaching = InlineSvg(require('!!raw!./icon-prof-coaching.svg'));

export default {
  Methodologies: <Methodologies />,
  UiUx: <UiUx />,
  SwDevelopment: <SwDevelopment />,
  Coaching: <Coaching />,
};
