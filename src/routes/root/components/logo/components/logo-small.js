import React from 'react';
import { Link } from 'components/content';

import {
  Content,
} from 'components';

import {
  AgileActorsLogoIcon,
} from './images';

type Props = {
  className?: string,
  size: Object,
  resizable?: boolean,
};

const LogoSmall = ({ className }: Props) => {
  return (
    <Link to={'/'}>
      <Content center className={className}>
        <AgileActorsLogoIcon />
      </Content>
    </Link>
  );
};

export default LogoSmall;
