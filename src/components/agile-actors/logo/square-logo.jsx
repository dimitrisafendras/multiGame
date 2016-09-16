import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import {
  jss,
  Content,
} from 'components/common';
import { AgileActorsLogoIcon } from './images';

const style = {
  img: {
    height: '110px',
    width: '100px',
    marginTop: '10px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

const { classes } = jss.createStyleSheet(style).attach();

export const SquareLogo = ({ className, ...rest }) => (
  <Link to={'/'} {...rest}>
    <Content Image
      className={classNames(classes.img, className)}>
      <AgileActorsLogoIcon />
    </Content>
  </Link>
);

SquareLogo.propTypes = {
  className: PropTypes.string,
};
