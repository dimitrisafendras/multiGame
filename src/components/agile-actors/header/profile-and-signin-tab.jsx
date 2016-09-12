import React from 'react';
import { useSheet } from 'components/common/jss';
import { Button } from 'components/common/content';
import { connect } from 'react-redux';

import { signOut, signIn } from '../../redux/modules/user/user-actions';

const content = {
  signIn: 'Signin',
  signUp: 'Signup',
};

const style = {
  container: {
    marginRight: '5px',
  },
  menuButton: {
    textTransform: 'capitalize',
    color: 'slategrey',
  },
  menuItem: {
    paddingLeft: '15px',
    color: 'slategrey',
  },
  ButtonStyle: {
    fontSize: '0.85em',
    marginTop: '5px',
    marginLeft: '15px',
  },
};

//
// Sign in button to be shown when the user is logged off
//
const SignInButton = useSheet((props) => {
  const { classes } = props.sheet;

  return (
    <Button
      raised
      ripple
      colored
      indigo
      onClick={props.handleLoginRegisterTouchTap}
      className={classes.ButtonStyle}>
      {content.signIn}
    </Button>
  );
}, style);

SignInButton.displayName = 'SignInButton';

SignInButton.propTypes = {
  sheet: React.PropTypes.object,
};

//
// Sign un button to be shown when the user is loged off
//
const SignUpButton = useSheet((props) => {
  const { classes } = props.sheet;

  return (
    <Button
      raised
      ripple
      colored
      accent
      onClick={props.handleLoginRegisterTouchTap}
      className={classes.ButtonStyle}
      style={{ marginLeft: '25px' }}>
      {content.signUp}
    </Button>
  );
});

SignUpButton.displayName = 'SignUpButton';

SignUpButton.propTypes = {
  sheet: React.PropTypes.object,
};

const ProfileButton = useSheet(({ sheet, onSignOut, user }) => (
  <Button
    id={'user-profile-nav-menu'}
    ripple
    className={sheet.menuButton}
    onClick={onSignOut}>
    {user}
  </Button>
));

ProfileButton.displayName = 'ProfileButton';

ProfileButton.propTypes = {
  onSignOut: React.PropTypes.func,
  sheet: React.PropTypes.object,
};

const ProfileAndSigninTab = useSheet((props) => (
  props.user ? <ProfileButton {...props} /> : (
    <span className={props.sheet.container}>
      <SignInButton {...props} />
      <SignUpButton {...props} />
    </span>
  )
));

ProfileAndSigninTab.displayName = 'ProfileAndSigninTab';

ProfileAndSigninTab.propTypes = {
  sheet: React.PropTypes.object,
  handleLoginRegisterTouchTap: React.PropTypes.func,
};

const mapStateToNavSigninProps = (state) => {
  let { user } = state;
  user = user && user.displayName;
  return { user };
};

const mapDispatchToNavSigninProps = (dispatch) => ({
  onSignOut: () => dispatch(signOut()),
  onSignIn: (options) => dispatch(signIn(options)),
});

export default connect(
  mapStateToNavSigninProps,
  mapDispatchToNavSigninProps,
)(ProfileAndSigninTab);
