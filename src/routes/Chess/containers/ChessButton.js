import React from 'react';
import { connect } from 'react-redux';
import { chooseMode, getReady } from '../modules/constants';
import ChessButton from '../components/ChessButton';

const mapStateToProps = (state)=> ({
  squares: state.chess.squares,
  victory: state.chess.victory,
  round: state.chess.round,
  username: state.home.username,
});
export default connect(mapStateToProps, { chooseMode, getReady })(ChessButton);
