import React from 'react';
import { connect } from 'react-redux';
import { markTile } from '../modules/actions';
import { ticTacToeSocket } from '../../../model-services/server-apis';
import { store } from 'main';

export function Square({ id, squares, markTile, currentPlayer, victory, gameStyle }) {

  function selectTile() {
    if ( !squares[id] && !victory ) {
      markTile(currentPlayer, id)
    }
  }

  function clickable() {
    if ( gameStyle == 'pvp' || currentPlayer == 'x' ){
      return 'clickable'
    }
  }

  return (
    <div className={clickable()} onClick={() => { selectTile() }}>{squares[id]}</div>
  )
}

function mapStateToProps(state) {
  return {
    squares: state.game.squares,
    currentPlayer: state.players.current_turn,
    victory: state.game.victory,
    gameStyle: state.game.gameStyle,
  }
}

export default connect(mapStateToProps, { markTile })(Square);

ticTacToeSocket.on('markTile', (action)=> {
  console.log('XXXXXXXXXXXXXXXXXXXX', action);
  store.dispatch(action);
});
