import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { ApplicationLayout } from 'layouts';

const mapStateToNavigationProps = ({ content }) => ({
  siteContent: content,
});

const mapDispatchToNavigationProps = (dispatch) => ({
  link: (path) => {
    path.charAt(0) === '/' ? dispatch(push(path)) : window.open(path, '_newtab');
  },
});

export default connect(
  mapStateToNavigationProps,
  mapDispatchToNavigationProps
)(ApplicationLayout);
