import React from 'react';
import { connect } from 'react-redux';
import Square from '../components/Square';
import {selectTile} from '../modules/constants';

const mapStateToProps = (state)=> ({
  squares: state.chess.squares,
});



export default connect(mapStateToProps, {selectTile})(Square);

