import React from 'react';
import { InlineSvg } from 'components/inline-svg';

export const Tools = InlineSvg(require('!!raw!./tools.svg'));
export const Development = InlineSvg(require('!!raw!./development.svg'));
export const Fun = InlineSvg(require('!!raw!./fun.svg'));
export const Respect = InlineSvg(require('!!raw!./respect.svg'));

export default {
  Tools: <Tools />,
  Development: <Development />,
  Fun: <Fun />,
  Respect: <Respect />,
};
