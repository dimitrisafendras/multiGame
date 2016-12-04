import React from 'react';
import { classes } from './styles';

const release = 2016;
const now = new Date().getFullYear();
const copyrightPeriod = (release !== now) ? `${release} - ${now}` : now;

const Signature = () => (
  <div className={classes.signature}>
    &copy; {copyrightPeriod} AgileActors, All Rights Reserved
  </div>
);

export default Signature;
