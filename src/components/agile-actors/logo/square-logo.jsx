import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import {
  jss,
  Content,
} from 'components/common';
import Images from './images';

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

export const SquareLogo = (props) => (
  <Link to={'/'} {...props}>
    <Content Image
      className={classNames(classes.img, props.className)}>
      <Images.AgileActorsLogoIcon />
    </Content>
  </Link>
);

SquareLogo.propTypes = {
  className: PropTypes.string,
};
