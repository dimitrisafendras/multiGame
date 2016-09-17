
import { connect } from 'react-redux';

import {
  signOut,
  signIn,
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
});

export default connect(
  mapStateToNavSigninProps,
  mapDispatchToNavSigninProps,
)(ProfileAndSigninTab);
