import React from 'react';
import { connect } from 'react-redux';
import Square from '../components/Square';
import { selectOptions } from '../modules/constants';
import {
  onMovedTile, onGotReady, onUpdatePlayers,
  onError, onGetOnline, onGotChallenged
} from '../../../model-services/chess/socketio/chessSocket';

const mapStateToProps = (state)=> ({
  selectedTile: state.chess.selectedTile,
  mode: state.chess.mode,
  clickOptions: state.chess.clickOptions,
  round: state.chess.round,
  playerColor: state.chess.playerColor
});

export default connect(mapStateToProps, selectOptions)(Square);
