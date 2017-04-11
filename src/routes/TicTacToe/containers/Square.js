import React from 'react';
import { connect } from 'react-redux';
import { markTile, markTileEvent } from '../modules/constants';
import { Square } from '../components/Square';

const mapStateToProps = (state)=> {
  console.log(state.game.gameStyle);
  return ({
    squares: state.game.squares,
    currentPlayer: state.players.current_turn,
    victory: state.game.victory,
    gameStyle: state.game.gameStyle,
  });
}

export default connect(mapStateToProps, { markTile, markTileEvent })(Square);
