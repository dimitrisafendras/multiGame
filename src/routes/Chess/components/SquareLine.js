import React from 'react'
import Square from '../../TicTacToe/containers/Square';
import styles from './styles.scss'

const SquareLine = ()=> {
  return (
  <div className={styles.line}>
      {
        [...Array(8).keys()].map((key) => {
          return <Square key={key} id={key}/>
        })
      }
  </div>
  )
};

export default SquareLine;
