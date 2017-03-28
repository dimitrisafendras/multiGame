import React from 'react';
import { connect } from 'react-redux';
import GameView from '../components/GameView';

const mapStateToProps = (state)=> ({
  mode: state.chess.mode,
});

export default connect(mapStateToProps,null)(GameView);
