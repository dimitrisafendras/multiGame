import React, { Component, PropTypes } from 'react';
import Header from 'components/Header';
import { Styles } from 'containers';

export default class ApplicationLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  render() {
    return (
      <Styles>
        <Header />
        {this.props.children}
      </Styles>
    );
  }
}
