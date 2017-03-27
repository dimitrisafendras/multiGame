import React from 'react';
import { connect } from 'react-redux';
import Chess from '../components/Chess';

const mapStateToProps = (state)=> ({
  squares: state.chess.squares,
  boolBoard: state.chess.boolBoard,
  victory: state.chess.victory,
  round: state.chess.round,
});

export default connect(mapStateToProps, null)(Chess);
