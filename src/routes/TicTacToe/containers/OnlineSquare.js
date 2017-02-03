import React from 'react';
import { connect } from 'react-redux';
import { markTileOnline } from '../modules/constants';
import { ticTacToeSocket } from '../../../model-services/server-apis';
import { store } from 'main';
import { OnlineSquare } from '../components/OnlineSquare';

const mapStateToProps = (state)=> ({
  squares: state.game.squares,
  currentPlayer: state.players.current_turn,
  victory: state.game.victory,
  gameStyle: state.game.gameStyle,
});

export default connect(mapStateToProps, {markTileOnline} )(OnlineSquare);

ticTacToeSocket.on('markTile', (action)=> {
  console.log('XXXXXXXXXXXXXXXXXXXX', action);
  store.dispatch(action);
});
