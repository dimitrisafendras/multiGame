import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import muiTheme from 'styles/customized-mui-theme';
import Images from './images';
import {
  jss,
  Content,
} from 'components/common';

const style = {
  img: {
    height: muiTheme.appBar.logoHeight,
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export const Logo = ({ className }) => (
  <Link to={'/'}>
    <Content
      className={classNames(classes.img, className)}>
      <Images.AgileActorsLogo />
    </Content>
  </Link>
);

Logo.propTypes = {
  className: PropTypes.string,
};
