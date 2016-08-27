import React from 'react';
import ValueProposition from './value-proposition';
import LifeAtAgileActors from './life-at-agile-actors';
import HelpToAchieve from './help-to-achieve';
import JoinUs from './join-us';

//
// Define the component
//
class Careers extends React.Component {
  render() {
    return (
      <section>
        <ValueProposition />
        <LifeAtAgileActors />
        <HelpToAchieve />
        <JoinUs />
      </section>
    );
  }
};

export default Careers;
