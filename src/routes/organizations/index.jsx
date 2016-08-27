import React from 'react';
import ValueProposition from './value-proposition';
import Introduction from './introduction';
import Offerings from './offerings';

//
// Define the component
//
class Organizations extends React.Component {
  render() {
    return (
      <section>
        <ValueProposition />
        <Introduction />
        <Offerings />
      </section>
    );
  }
};

export default Organizations;
