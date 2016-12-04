import React from 'react';
import SocialMedia from './components/social-media/social-media';
import FooterMenuBar from './components/footer-menu-bar/footer-menu-bar';

const Footer = (props) => (
  <div>
    <SocialMedia />
    <FooterMenuBar {...props} />
  </div>
);

export default Footer;
