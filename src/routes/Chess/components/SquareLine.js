import React from 'react'
import Square from '../containers/Square';
import styles from './styles.scss'

const SquareLine = ({lineKey})=> {
  return (
  <div className={styles.line}>
      {
        [...Array(8).keys()].map((key) => {
          return <Square key={key+8*lineKey} squareId={key} lineId = {lineKey} />
        })
      }
  </div>
  )
};

export default SquareLine;
