import React from 'react';
import { connect } from 'react-redux';
import ResetButton from '../components/ResetButton';
import { getDisconnected } from '../modules/constants';

const mapStateToProps = (state) => ({
  username: state.home.username,
});

export default connect(mapStateToProps, { getDisconnected })(ResetButton);
