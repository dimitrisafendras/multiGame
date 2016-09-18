
import { connect } from 'react-redux';

import {
  signOut,
  signIn,
  signUp,
} from 'routes/application/modules/user/user-actions';

import ProfileAndSigninTab from '../components/profile-and-signin-tab';

const mapStateToNavSigninProps = (state) => {
  let { user } = state;
  user = user && user.displayName;
  return { user };
};

const mapDispatchToNavSigninProps = (dispatch) => ({
  onSignOut: () => dispatch(signOut()),
  onSignIn: (options) => dispatch(signIn(options)),
  onSignUp: (options) => dispatch(signUp(options)),
});

export default connect(
  mapStateToNavSigninProps,
  mapDispatchToNavSigninProps,
)(ProfileAndSigninTab);
