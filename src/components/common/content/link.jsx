import React from 'react';
import { Link as ReactLink } from 'react-router';

import { classes, makeClassesFromProps } from './styles';

export const Link = ({ className, ...rest }) => (
  <ReactLink
    {...rest}
    className={makeClassesFromProps({ className, ...rest }, classes)} />
);

Link.propTypes = {
  className: React.PropTypes.string,
};

Link.displayName = 'Link';
