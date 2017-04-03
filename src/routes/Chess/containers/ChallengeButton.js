import React from 'react';
import { connect } from 'react-redux';
import ChallengeButton from '../components/ChallengeButton';
import { readyToPlay } from '../modules/constants';

const mapStateToProps = (state)=> ({
  username: state.home.username,
  opponent: state.chess.opponent,
});

export default connect(mapStateToProps, { readyToPlay })(ChallengeButton);
