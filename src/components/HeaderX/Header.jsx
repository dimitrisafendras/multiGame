import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Header.scss';

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>
    {' · '}
    <Link to='/becomeAgileActor' activeClassName={classes.activeRoute}>
      Become Agile Actor
    </Link>
    {' · '}
    <Link to='/organizations' activeClassName={classes.activeRoute}>
      Organizations
    </Link>
    {' · '}
    <Link to='/careers' activeClassName={classes.activeRoute}>
      Careers
    </Link>
    {' · '}
    <Link to='/about' activeClassName={classes.activeRoute}>
      about
    </Link>
    {' · '}
    <Link to='/contact' activeClassName={classes.activeRoute}>
      contact
    </Link>
  </div>
);

export default Header;
