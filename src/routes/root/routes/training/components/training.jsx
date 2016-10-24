import React from 'react';
import ValueProposition from './value-proposition/value-proposition';
import Courses from './courses/courses';

class Training extends React.Component {
  render() {
    return (
      <section>
        <ValueProposition />
        <Courses />
      </section>
    );
  }
};


export default Training;
