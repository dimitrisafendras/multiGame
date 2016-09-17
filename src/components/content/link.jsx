import React, { Component, PropTypes } from 'react';
import { Link as ReactLink } from 'react-router';

import { classes, makeClassesFromProps } from './styles';

export class Link extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className, ...rest } = this.props;
    return (
      <ReactLink
        {...rest}
        className={makeClassesFromProps({ className, ...rest }, classes)} />
    );
  }
}
