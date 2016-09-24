import React from 'react';
import ValueProposition from './value-proposition/value-proposition';
import AgileActorsMethodology from './agile-actors-methodology/agile-actors-methodology';
import AgileActorsPractice from './agile-actors-practice/agile-actors-practice';
import Organizations from './organizations/organizations';

//
// Define the component
//
export class Home extends React.Component {
  render() {
    return (
      <section>
        <ValueProposition />
        <AgileActorsMethodology />
        <AgileActorsPractice />
        <Organizations />
      </section>
    );
  }
}

export default Home;
