import { connect } from 'react-redux';
import { Dashboard } from '../components';

export default connect(
  ({ user }) => ({ user }),
)(Dashboard);
