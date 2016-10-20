import React from 'react';
import { InlineSvg } from 'components/inline-svg';

const Tools = InlineSvg(require('!!raw!./tools.svg'));
const Development = InlineSvg(require('!!raw!./development.svg'));
const Fun = InlineSvg(require('!!raw!./fun.svg'));
const Respect = InlineSvg(require('!!raw!./respect.svg'));

export default {
  Tools: <Tools />,
  Development: <Development />,
  Fun: <Fun />,
  Respect: <Respect />,
};
