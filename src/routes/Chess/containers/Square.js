import React from 'react';
import { connect } from 'react-redux';
import Square from '../components/Square'

const mapStateToProps = (state)=> ({
  squares: state.chess.squares,
  victory: state.chess.victory,
});

export default connect(mapStateToProps)(Square);

