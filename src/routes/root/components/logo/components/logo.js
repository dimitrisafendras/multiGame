import React from 'react';
import classNames from 'classnames';
import { Link } from 'components/content';
import { img } from './style';

import {
  Content,
  Resizable,
} from 'components';

import {
  AgileActorsLogo,
  AgileActorsLogoIcon,
} from './images';

type Props = {
  className?: string,
  size: Object,
  resizable?: boolean,
};

const Logo = ({ className, size: { mobile }, resizable }: Props) => {
  const [logo, classes] = (resizable && mobile) ? (
      [<AgileActorsLogoIcon />, className]
  ) : (
      [<AgileActorsLogo />, classNames(img, className)]
  );

  return (
    <Link to={'/'}>
      <Content center className={classes}>
        {logo}
      </Content>
    </Link>
  );
};

export default Resizable(Logo);
