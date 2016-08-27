import React from 'react';
import ValueProposition from './value-proposition';
import Introduction from './introduction';
import ContactForm from './contact-form';
import AgileMap from './agile-map';

class Contact extends React.Component {
  render() {
    return (
      <section>
        <ValueProposition />
        <Introduction />
        <ContactForm />
        <AgileMap />
      </section>
    );
  }
};

export default Contact;
