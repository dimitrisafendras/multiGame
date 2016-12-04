import React from 'react';
import ValueProposition from './value-proposition/value-proposition';
import HelpToAchieve from './help-to-achieve/help-to-achieve';
import LifeAtAgileActors from './life-at-agile-actors/life-at-agile-actors';

class Careers extends React.Component {
  render() {
    return (
      <section>
        <ValueProposition />
        <LifeAtAgileActors />
        <HelpToAchieve />
      </section>
    );
  }
};

export default Careers;
