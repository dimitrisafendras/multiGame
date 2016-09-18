import { connect } from 'react-redux';

import Authentication from '../components/authentication';

export default connect(
  ({ user }) => ({ user })
)(Authentication);
