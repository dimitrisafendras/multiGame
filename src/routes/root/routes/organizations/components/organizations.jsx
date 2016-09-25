import React from 'react';
import ValueProposition from './value-proposition/value-proposition';
import Offerings from './offerings/offerings';

//
// Define the component
//
class Organizations extends React.Component {
  render() {
    return (
      <section>
        <ValueProposition />
        <Offerings />
      </section>
    );
  }
};

export default Organizations;
