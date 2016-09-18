import React from 'react';
import { Link } from 'react-router';

import classNames from 'classnames';

import { Content } from 'components';

import { AgileActorsLogo } from './images';
import { img } from './style';

type Props = {
  className?: string,
};

const Logo = ({ className } : Props) => (
  <Link to={'/'}>
    <Content className={classNames(img, className)}>
      <AgileActorsLogo />
    </Content>
  </Link>
);

export {
  Logo,
};

export default Logo;
