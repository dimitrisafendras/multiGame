import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import classNames from 'classnames';

import muiTheme from 'styles/customized-mui-theme';

import { AgileActorsLogo } from './images';
import {
  jss,
  Content,
} from 'components';

const style = {
  img: {
    height: muiTheme.appBar.logoHeight,
  },
};

const { classes: { img } } = jss.createStyleSheet(style).attach();

export const Logo = ({ className }) => (
  <Link to={'/'}>
    <Content className={classNames(img, className)}>
      <AgileActorsLogo />
    </Content>
  </Link>
);

Logo.propTypes = {
  className: PropTypes.string,
};
