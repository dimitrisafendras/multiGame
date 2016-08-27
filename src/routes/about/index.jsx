import React from 'react';
import ValueProposition from './value-proposition';
import Introduction from './introduction';
import AgileActorsVision from './agile-actors-vision';

//
// Define the component
//
class About extends React.Component {
  render() {
    return (
      <section>
        <ValueProposition />
        <Introduction />
        <AgileActorsVision />
      </section>
    );
  }
};

export default About;
