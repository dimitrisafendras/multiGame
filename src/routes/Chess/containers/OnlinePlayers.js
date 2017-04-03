import React from 'react';
import { connect } from 'react-redux';
import OnlinePlayers from '../components/OnlinePlayers';
import { challengePlayer } from '../modules/constants';

const mapStateToProps = (state)=> ({
  onlinePlayers: state.chess.onlinePlayers,
  username: state.home.username,
});
export default connect(mapStateToProps, { challengePlayer })(OnlinePlayers);
