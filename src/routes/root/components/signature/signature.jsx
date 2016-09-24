import React from 'react';
import classes from './styles';

const releaseYear = 2016;
const currentYear = new Date().getFullYear();
const copyrightPeriod = (releaseYear !== currentYear)
  ? `${releaseYear} - ${currentYear}` : releaseYear;

const Signature = () => (
  <div className={classes.signature}>
    &copy; {copyrightPeriod} AgileActors, All Rights Reserved
  </div>
);

export default Signature;
