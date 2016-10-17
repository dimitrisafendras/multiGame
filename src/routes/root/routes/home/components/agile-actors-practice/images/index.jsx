import React from 'react';
import { InlineSvg } from 'components/inline-svg';

const Methodologies = InlineSvg(require('!!raw!./icon-agile-methodologies.svg'));
const UiUx = InlineSvg(require('!!raw!./icon-ux-ui.svg'));
const SwDevelopment = InlineSvg(require('!!raw!./icon-sw-development.svg'));
const Coaching = InlineSvg(require('!!raw!./icon-prof-coaching.svg'));

export default {
  Methodologies: <Methodologies />,
  UiUx: <UiUx />,
  SwDevelopment: <SwDevelopment />,
  Coaching: <Coaching />,
};
