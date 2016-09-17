import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Layout } from '../components';

export default connect(
  ({ content }) => ({ content }),
  (dispatch) => ({
    link: (path) => {
      path.charAt(0) === '/' ? dispatch(push(path)) : window.open(path, '_newtab');
    },
  })
)(Layout);
