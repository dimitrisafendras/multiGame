import React from 'react';
import { InlineSvg, InlineBackgroundImageSvg } from 'components/common/inline-svg';

export const BackgroundLineLarge = InlineBackgroundImageSvg(require('!!raw!./line-large'));
export const BackgroundLineSmall = InlineBackgroundImageSvg(require('!!raw!./line-small'));
export const Target = InlineSvg(require('!!raw!./image-target'));
export const Measure = InlineSvg(require('!!raw!./image-measure'));
export const Prioritize = InlineSvg(require('!!raw!./image-priorities'));
export const Act = InlineSvg(require('!!raw!./image-act'));

export default {
  BackgroundLineLarge,
  BackgroundLineSmall,
  Target: <Target />,
  Measure: <Measure />,
  Prioritize: <Prioritize />,
  Act: <Act />,
};
