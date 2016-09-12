import { connect } from 'react-redux';

import { signIn } from 'routes/home/modules/user/user-actions';

export default connect(
  (state) => ({}),
  (dispatch) => ({
    authProvider: (options) => { // { provider, email, password}
      dispatch(signIn(options));
    },
  })
);
