import React from 'react';
import AgileActorsMap from './agile-actors-map/agile-actors-map';
import Introduction from './introduction/introduction';
import ContactForm from './contact-form/contact-form';
import AgileActorsTransportation from './agile-actors-transportation/agile-actors-transportation';

class Contact extends React.Component {
  render() {
    return (
      <section>
        <AgileActorsMap />
        <Introduction />
        <ContactForm />
        <AgileActorsTransportation />
      </section>
    );
  }
};

export default Contact;
