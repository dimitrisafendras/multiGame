import React from 'react';
import { connect } from 'react-redux';
import Square from '../components/Square';
import { selectOptions } from '../modules/constants';

const mapStateToProps = (state)=> ({
  squares: state.chess.squares,
  boolBoard: state.chess.boolBoard,
  selectedTile: state.chess.selectedTile,
  round: state.chess.round,
  victory: state.chess.victory,
});

export default connect(mapStateToProps, selectOptions )(Square);

