import React from 'react';
import { InlineSvg } from 'components/common/inline-svg';

export const Fun = InlineSvg(require('!!raw!./fun'));
export const PersonalDev = InlineSvg(require('!!raw!./personal-dev'));
export const Respect = InlineSvg(require('!!raw!./respect'));
export const Tools = InlineSvg(require('!!raw!./tools'));

export default {
  Fun: <Fun />,
  PersonalDev: <PersonalDev />,
  Respect: <Respect />,
  Tools: <Tools />,
};
