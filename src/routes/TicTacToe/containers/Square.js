import React from 'react';
import { connect } from 'react-redux';
import { markTile } from '../modules/constants';
import { markTileOnline } from '../modules/constants';
import { Square } from '../components/Square';
import { ticTacToeSocket } from '../../../model-services/server-apis';
import { store } from 'main';

const mapStateToProps = (state)=> ({
    squares: state.game.squares,
    currentPlayer: state.players.current_turn,
    victory: state.game.victory,
    gameStyle: state.game.gameStyle,
});

export default connect(mapStateToProps, {markTile, markTileOnline} )(Square);

ticTacToeSocket.on('markTile', (action)=> {
  console.log('XXXXXXXXXXXXXXXXXXXX', action);
  store.dispatch(action);
});
