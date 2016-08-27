import React from 'react';
import ValueProposition from './value-proposition/index';
import Introduction from './introduction';
import WhyJoinAgileAcrors from './why-join-agile-actors/index';
import FourSteps from './four-steps';

class BecomeAgileActor extends React.Component {
  render() {
    return (
      <section>
        <ValueProposition />
        <Introduction />
        <WhyJoinAgileAcrors />
        <FourSteps />
      </section>
    );
  }
};

export default BecomeAgileActor;
