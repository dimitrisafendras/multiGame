import React from 'react';
import { Link } from 'components/content';

import {
  AgileActorsLogoIcon,
} from './images';

type Props = {
  className?: string,
};

const LogoSmall = ({ className }: Props) => {
  return (
    <Link to={'/'}>
      <div className={className}>
        <AgileActorsLogoIcon />
      </div>
    </Link>
  );
};

export default LogoSmall;
