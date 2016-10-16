import React from 'react';
import ValueProposition from './value-proposition/value-proposition';
import AgileActorsVision from './agile-actors-vision/agile-actors-vision';
// import LifeAtAgileActors from './life-at-agile-actors';

class About extends React.Component {
  render() {
    return (
      <section>
        <ValueProposition />
        <AgileActorsVision />
      </section>
    );
  }
};

export default About;
