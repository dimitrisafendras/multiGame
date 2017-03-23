import React from 'react';
import { connect } from 'react-redux';
import Chess from '../components/Chess';

const mapStateToProps = (state)=> ({
  squares: state.chess.squares,
  boolBoard: state.chess.boolBoard,
});

export default connect(mapStateToProps, null)(Chess);
