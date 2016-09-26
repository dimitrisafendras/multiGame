import React from 'react';
import ValueProposition from './value-proposition';
import Introduction from './introduction';
import ContactForm from './contact-form';
import AgileMap from './agile-map';

class Contact extends React.Component {
  render() {
    return (
      <section>
        <AgileMap />
        <Introduction />
        <ContactForm />
      </section>
    );
  }
};

export default Contact;
