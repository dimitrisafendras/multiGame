import React from 'react';
import { connect } from 'react-redux';
import Square from '../components/Square';
import { selectOptions } from '../modules/constants';
import { onMovedTile } from '../../../model-services/chess/socketio/chessSocket';

const mapStateToProps = (state)=> ({
  selectedTile: state.chess.selectedTile,
  victory: state.chess.victory,
  mode: state.chess.mode,
  clickOptions: state.chess.clickOptions,
  round: state.chess.round,
});

onMovedTile();

export default connect(mapStateToProps, selectOptions)(Square);
