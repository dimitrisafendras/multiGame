import React from 'react';
import { connect } from 'react-redux';
import { markTile, markTileOnline } from '../modules/constants';
import { Square } from '../components/Square';
import { onMarkTile } from '../../../model-services/ticTacToe/socketio/ticTacToe';

const mapStateToProps = (state)=> ({
    squares: state.game.squares,
    currentPlayer: state.players.current_turn,
    victory: state.game.victory,
    gameStyle: state.game.gameStyle,
});

export default connect(mapStateToProps, {markTile, markTileOnline})(Square);

onMarkTile();
