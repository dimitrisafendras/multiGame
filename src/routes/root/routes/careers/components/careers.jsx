import React from 'react';
import ValueProposition from './value-proposition';
import HelpToAchieve from './help-to-achieve';

class Careers extends React.Component {
  render() {
    return (
      <section>
        <ValueProposition />
        <HelpToAchieve />
      </section>
    );
  }
};

export default Careers;
