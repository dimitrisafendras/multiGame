import React from 'react';
import FooterMenuBar from './footer-menu-bar';
import SocialMedia from './social-media';

export const Footer = (props) => (
  <div>
    <SocialMedia />
    <FooterMenuBar {...props} />
  </div>
);
