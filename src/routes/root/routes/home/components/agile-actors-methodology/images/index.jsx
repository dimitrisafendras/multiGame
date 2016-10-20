import React from 'react';
import { InlineSvg, InlineBackgroundImageSvg } from 'components/inline-svg';

const BackgroundLineLarge = InlineBackgroundImageSvg(require('!!raw!./line-large'));
const BackgroundLineSmall = InlineBackgroundImageSvg(require('!!raw!./line-small'));
const Target = InlineSvg(require('!!raw!./image-target'));
const Measure = InlineSvg(require('!!raw!./image-measure'));
const Prioritize = InlineSvg(require('!!raw!./image-priorities'));
const Act = InlineSvg(require('!!raw!./image-act'));

export default {
  BackgroundLineLarge,
  BackgroundLineSmall,
  Target: <Target />,
  Measure: <Measure />,
  Prioritize: <Prioritize />,
  Act: <Act />,
};
