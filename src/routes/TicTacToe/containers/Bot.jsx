import React from 'react';
import {Bot} from '../components/Bot';
import {connect} from 'react-redux';
import {markTile} from '../modules/constants';

function mapStateToProps(state) {
  return {
    squares: state.game.squares,
    current_player: state.players.current_turn,
    victory: state.game.victory,
    gameStyle: state.game.gameStyle
  }
}

export default connect(mapStateToProps, {markTile})(Bot);
