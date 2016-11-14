import React from 'react';
import { RaisedButton } from 'material-ui';
import { styles } from './styles';

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
    style={{ ...style, ...styles.button }}
    label={children}
    {...rest} />
);

Button.displayName = 'Button';
