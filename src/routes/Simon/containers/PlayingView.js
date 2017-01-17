import React from 'react'
import { bindActionCreators } from 'redux'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { Pads } from '../containers/Pads'
import { startGame, reset } from '../modules/actions'
import './PlayingView.scss'

const buttonStyle = {
  border: '2px solid #a1a1a1',
  padding: '10px 40px',
  background: '#dddddd',
  width: '250px',
  borderRadius:'25px',
}
const style = {
  fontFamily: "Times New Roman",
  color: 'black',
}

const playingViewActions = {
  startGame,
  reset
}
export let PlayingView =  ({ actions, gameState, score, highScore }) => {
  switch (gameState) {
    case 'started':
      return(
      <div style = {style}>
        <h1>Simon </h1>
        <Pads />
        <h2> SCORE: { score } </h2>
        <h5> HIGH SCORE: { highScore } </h5>
        <button type='reset' onClick={actions.reset} style = {buttonStyle}>RESET</button>
      </div>
    );
    case 'lose':
    return(
      <div style = {style}>
      <div className="buttons">
        <h1>Try again!</h1>
        <button type="start" onClick={ actions.startGame } style = {buttonStyle}>New game!</button>
      </div>
      </div>
    );
    case 'reset':
    return (
      <div style = {style}>
        <div className="buttons">
          <button type="start" onClick={ actions.startGame } style = {buttonStyle}>Start game!</button>
        </div>
      </div>
    )
    default:
    return (
      <div style = {style}>
        <div className="buttons">
          <button type="start" onClick={ actions.startGame } style = {buttonStyle}>Start game!</button>
        </div>
      </div>
    )
  }
};

PlayingView = connect(
  ({ Simon: { gameState, score, highScore } }) => ({
    gameState,
    score,
    highScore,
  }),
  (dispatch) => ({
    actions: bindActionCreators(playingViewActions, dispatch),
  }),
)(PlayingView);

export default PlayingView;
