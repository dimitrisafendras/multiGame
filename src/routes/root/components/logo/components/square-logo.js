import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import { Content } from 'components';
import { AgileActorsLogoIcon } from './images';
import { imgSquare } from './style';

type Props = {
  className?: string,
};

export const SquareLogo = ({ className, ...rest } : Props) => (
  <Link to={'/'} {...rest}>
    <Content Image
      className={classNames(imgSquare, className)}>
      <AgileActorsLogoIcon />
    </Content>
  </Link>
);
