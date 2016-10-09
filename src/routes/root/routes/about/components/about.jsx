import React from 'react';
import ValueProposition from './value-proposition/value-proposition';
import HelpToAchieve from './help-to-achieve/help-to-achieve';
import AgileActorsVision from './agile-actors-vision/agile-actors-vision';
// import LifeAtAgileActors from './life-at-agile-actors';

class About extends React.Component {
  render() {
    return (
      <section>
        <ValueProposition />
        <AgileActorsVision />
        <HelpToAchieve />
      </section>
    );
  }
};

export default About;
