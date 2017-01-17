import React, { Component } from 'react';
import { Keyboard } from '../components/keyboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HangmanActions from '../Modules/actions';
import { HangmanPicture } from '../components/hangman-picture';
import { GiveYourWord } from './giveYourWord';

const style = {
    button: {
      border: '2px solid #a1a1a1',
      padding: '10px 40px',
      background: '#dddddd',
      width: '250px',
      borderRadius:'25px',
    },
    text: {
      fontFamily: "Times New Roman",
      color: 'black',
    },
    secretWord:{
      fontStyle:'italic',
      display: 'inline',
      fontWeight: 'bold',
    }
}

const GameView = (errorsCount, wordMask, usedLetters, wordToGuess, playWithFriend, actions) =>{
  if (playWithFriend && wordToGuess == ''){
      return (
        <div>
          <GiveYourWord/>
          <br/>
          <button onClick = {actions.resetGame} style={style.button}>Reset</button>
        </div>
      );
  }
  if (wordToGuess == ''){
    return (
      <div>
        <button onClick = {actions.fetchWord} style={style.button}>Play With a Bot</button>
        <br/>
        <br/>
        <button onClick = {actions.playWithFriend} style={style.button}>Play With a Friend</button>
      </div>
    );
  }
  if (wordToGuess == wordMask){
    return (
      <div>
          <HangmanPicture errorsCount={errorsCount}/>
          <h1> VICTORY!! </h1>
          <h2>The word was <p style = {style.secretWord}>{wordMask}</p></h2>
          <button onClick = {actions.resetGame} style={style.button}>Reset</button>
     </div>
    )
  }
  if (errorsCount == 7){
    return (
      <div>
          <HangmanPicture errorsCount={errorsCount}/>
          <h1> You lose! </h1>
          <h2>The word was <p style = {style.secretWord}>{wordToGuess} </p></h2>
          <button onClick = {actions.resetGame} style={style.button}>Reset</button>
     </div>
    )
  }
  return (
    <div>
      <HangmanPicture errorsCount={errorsCount}/>
      <h1>
        {wordMask}
      </h1>
      <Keyboard guessLetter={actions.guessLetter} usedLetters={usedLetters} />
      <br/>
      <button onClick = {actions.resetGame} style={style.button}>Reset</button>
    </div>

  );
}


const Hangman = ( {errorsCount, wordMask, usedLetters, wordToGuess, playWithFriend, actions }) => {
    return (
      <div style = {style.text}>
      <h1> Hangman </h1>
        {GameView(errorsCount, wordMask, usedLetters, wordToGuess, playWithFriend, actions)}
      </div>
    );
}

function mapStateToProps(state) {
  return {
    wordMask: state.hangman.wordMask,
    errorsCount: state.hangman.errorsCount,
    usedLetters: state.hangman.usedLetters,
    wordToGuess: state.hangman.wordToGuess,
    playWithFriend: state.hangman.playWithFriend,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HangmanActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hangman)
