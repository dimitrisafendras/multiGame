import React from 'react';
import { InlineSvg } from 'components/inline-svg';

const OrganizationLevelUp = InlineSvg(require('!!raw!./image-organization-level-up.svg'));
const OrganizationTalent = InlineSvg(require('!!raw!./image-organization-talent.svg'));

export default {
  OrganizationLevelUp: <OrganizationLevelUp />,
  OrganizationTalent: <OrganizationTalent />,
};
