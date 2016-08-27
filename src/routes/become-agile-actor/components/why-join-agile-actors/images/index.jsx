import React from 'react';
import { InlineSvg, InlineBackgroundImageSvg } from 'components/common/inline-svg';
export const BackgroundMountains = InlineBackgroundImageSvg(require('!!raw!./mountains.svg'));
export const Horse = InlineSvg(require('!!raw!./horse'));
export const Pawn = InlineSvg(require('!!raw!./pawn'));
export const Queen = InlineSvg(require('!!raw!./queen'));

export default {
  BackgroundMountains: BackgroundMountains,
  Horse: <Horse />,
  Pawn: <Pawn />,
  Queen: <Queen />,
};
