import React from 'react';
import classNames from 'classnames';
import { Link } from 'components/content';
import { img } from './style';

import {
  Content,
  Resizable
} from 'components';

import {
  AgileActorsLogo,
  AgileActorsLogoIcon
} from './images';

type Props = {
  className?: string,
  size: object
};

const Logo = ({ className, size, resizable } : Props) => {
  const logo = (resizable && size.mobile) ? <AgileActorsLogoIcon /> : <AgileActorsLogo />;

  return (
    <Link to={'/'}>
      <Content className={classNames(img, className)}>
        {logo}
      </Content>
    </Link>
  );
}

export default Resizable(Logo);
