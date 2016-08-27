import React from 'react';
import { RaisedButton } from 'material-ui';

const defaultStyle = {
  zIndex: 3,
  boxShadow: 'none',
  display: 'inline-table',
};

export const Button = ({ children, className, style, ...rest }) => (
  <RaisedButton
    className={className}
    style={{ ...defaultStyle, ...style }}
    label={children}
    labelStyle={defaultStyle.button}
    {...rest} />
);

Button.propTypes = {
  children: React.PropTypes.any,
  style: React.PropTypes.object,
  className: React.PropTypes.string,
};

Button.displayName = 'Button';
