import React from 'react';
import { connect } from 'react-redux';
import { markTile, markTileOnline } from '../modules/constants';
import { Square } from '../components/Square';

const mapStateToProps = (state)=> ({
    squares: state.game.squares,
    currentPlayer: state.players.current_turn,
    victory: state.game.victory,
    gameStyle: state.game.gameStyle,
});

export default connect(mapStateToProps, {markTile, markTileOnline} )(Square);
