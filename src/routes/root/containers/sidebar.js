import { connect } from 'react-redux';
import { signOut } from '../modules/user/user-actions';
import { Sidebar } from '../components';

export default connect(
  ({ user, content }) => ({ user, content }),
  (dispatch) => ({
    onSignOut: () => dispatch(signOut()),
  }),
)(Sidebar);
