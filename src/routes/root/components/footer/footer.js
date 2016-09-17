import React from 'react';
import FooterMenuBar from './components/footer-menu-bar';
import { SocialMedia } from './components/social-media';

const Footer = (props) => (
  <div>
    <SocialMedia />
    <FooterMenuBar {...props} />
  </div>
);

export default Footer;
