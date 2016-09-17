import React from 'react';
import { InlineSvg } from 'components/inline-svg';

export const Facebook = InlineSvg(require('!!raw!./facebook'));
export const Linkedin = InlineSvg(require('!!raw!./linkedin'));
export const Twitter = InlineSvg(require('!!raw!./twitter'));

export default {
  Facebook: <Facebook />,
  Linkedin: <Linkedin />,
  Twitter: <Twitter />,
};
