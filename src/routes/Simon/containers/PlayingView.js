import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import options from '../modules/actions'
import { PlayingView } from '../components/PlayingView'
import './PlayingView.scss'

const generalOptions = ((options)=>({
  onlinePad: options.online.clickPadOnline,
  onlineGame: options.online.startGameOnline,
  offlinePad: options.offline.clickPad,
  offlineGame: options.offline.startGame,
  reset: options.reset,
  waitPlayers: options.waitPlayers
}))(options);

console.log(generalOptions);

const mapStateToProps = ({ Simon: { gameState, score, highScore, onlinePlayers } }) => ({
  gameState,
  score,
  highScore,
  onlinePlayers,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(generalOptions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayingView);
