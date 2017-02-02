import React from 'react';
import { connect } from 'react-redux';
import { markTile } from '../modules/constants';

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
    <div className={clickable()} onClick={() => {selectTile()} }>{squares[id]}</div>
  )
};

const mapStateToProps = (state)=> ({
    squares: state.game.squares,
    currentPlayer: state.players.current_turn,
    victory: state.game.victory,
    gameStyle: state.game.gameStyle,
});

export default connect(mapStateToProps, {markTile} )(Square);

