import React from 'react';
import { RaisedButton } from 'material-ui';

const defaultStyle = {
  zIndex: 3,
  boxShadow: 'none',
  display: 'inline-table',
};

type Props = {
  children?: HTMLElement,
  style?: Object,
  className?: string,
};

export const Button = ({
  children,
  className,
  style,
  ...rest,
} : Props) => (
  <RaisedButton
    className={className}
    style={{ ...defaultStyle, ...style }}
    label={children}
    labelStyle={defaultStyle.button}
    {...rest} />
);

Button.displayName = 'Button';
