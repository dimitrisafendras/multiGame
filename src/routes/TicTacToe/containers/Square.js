import React from 'react';
import { connect } from 'react-redux';
import { markTile } from '../modules/constants';
import { ticTacToeSocket } from '../../../model-services/server-apis';
import { store } from 'main';

export const Square= ({ id, squares, markTile, currentPlayer, victory, gameStyle })=> {

  const selectTile = ()=> {
    if ( !squares[id] && !victory ) {
     return  markTile(currentPlayer, id);
    }
  };

  const clickable = ()=> {
    if ( gameStyle == 'pvp' || currentPlayer == 'x' ){
      return 'clickable'
    }
  };

  return (
    <div className={clickable()} onClick={() => {ticTacToeSocket.emit('markTile', selectTile())} }>{squares[id]}</div>
  )
};

const mapStateToProps = (state)=> ({
    squares: state.game.squares,
    currentPlayer: state.players.current_turn,
    victory: state.game.victory,
    gameStyle: state.game.gameStyle,
});

export default connect(mapStateToProps, {markTile} )(Square);

ticTacToeSocket.on('markTile', (action)=> {
  console.log('XXXXXXXXXXXXXXXXXXXX', action);
  store.dispatch(action);
});
