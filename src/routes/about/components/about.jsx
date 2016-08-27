import React from 'react';
import ValueProposition from './value-proposition';
import Introduction from './introduction';
import AgileActorsVision from './agile-actors-vision';

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
