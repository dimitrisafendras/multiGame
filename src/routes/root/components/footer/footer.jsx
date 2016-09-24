import React from 'react';
import FooterMenuBar from './components/footer-menu-bar/footer-menu-bar/footer-menu-bar';
import { SocialMedia } from './components/footer-menu-bar/footer-menu-bar';

const Footer = (props) => (
  <div>
    <SocialMedia />
    <FooterMenuBar {...props} />
  </div>
);

export default Footer;
