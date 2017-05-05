import React from 'react';
import { connect } from 'react-redux';
import ChallengeButton from '../components/ChallengeButton';
import { answerChallenge } from '../modules/constants';

const mapStateToProps = (state) => ({
  username: state.home.username,
  opponent: state.chess.opponent,
});

export default connect(mapStateToProps, { answerChallenge })(ChallengeButton);
