import React from 'react'
import Square from '../containers/Square';
import Bot from '../containers/bot';
import styles from './styles.scss'

const TicTacToe = ({victory, newGame}) =>{

  function displayWinner() {
    if (victory) {
      if (victory == 'tie') {
        return <div className={styles.victoryMessage}>Its a {victory} </div>
      }
      return <div className={styles.victoryMessage}>Player {victory} has won</div>
    }
  }

  return (
    <div style = {styles}>
      <div className={styles.game}>
        <h1 style = {{fontFamily: 'Times New Roman'}}> Tic Tac Toe </h1>
        <div className={styles.controls}>
          <button onClick={() => { newGame('x', 'pvp') }} className="btn btn-primary" style={{ backgroundColor: "green" }}>Play With Friend</button>
          <button onClick={() => { newGame('x', 'pvb') }} className="btn btn-primary">I go first</button>
          <button onClick={() => { newGame('o', 'pvb') }} className="btn btn-danger">You go first</button>
        </div>
        <div className={styles.board}>
          {
            [...Array(9).keys()].map((key) => {
              return <Square key={key} id={key}/>
            })
          }
        </div>
      </div>
      { displayWinner() }
      <Bot />
    </div>
  )
};

export default TicTacToe;
