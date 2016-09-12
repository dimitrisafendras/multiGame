import { connect } from 'react-redux';
import { signOut } from '../modules/user/user-actions';
import { Header } from 'components/agile-actors';

export default connect(
  ({ user }) => ({ user }),
  (dispatch) => ({
    onSignOut: () => dispatch(signOut()),
  }),
)(Header);
