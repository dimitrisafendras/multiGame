import React from 'react';
import { Link as ReactLink } from 'react-router';

import { classes, makeClassesFromProps } from './styles';

type Props = {
  className?: string,
};

export const Link = ({ className, ...rest }: Props) => (
  <ReactLink
    {...rest}
    className={makeClassesFromProps({ className, ...rest }, classes)} />
);
