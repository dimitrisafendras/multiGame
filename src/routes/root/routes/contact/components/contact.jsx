import React from 'react';
import AgileMap from './agile-map/agile-map';
import Introduction from './introduction/introduction';
import ContactForm from './contact-form/contact-form';

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
