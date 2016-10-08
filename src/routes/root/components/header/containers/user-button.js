import { connect } from 'react-redux';
import { signOut } from 'routes/root/modules/user/user-actions';
import {
  UserButtonMobile as UserButtonMobileComp,
  UserButton as UserButtonComp,
 } from '../components';

const containerCreator = connect(
  ({ user }) => ({ user }),
  (dispatch) => ({
    onSignOut: () => dispatch(signOut()),
  }),
);

export const UserButton = containerCreator(UserButtonComp);
export const UserButtonMobile = containerCreator(UserButtonMobileComp);
