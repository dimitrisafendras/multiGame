import React from 'react';
import Square from '../containers/Square';
import styles from './styles.scss';
import { maxRows } from '../modules/constants';

const SquareLine = ({lineKey})=> {

  return (
  <div className={styles.line}>
    {
      [...Array(maxRows).keys()].map((key) => {
        return <Square key={key+(maxRows*lineKey)} squareId={key} lineId={lineKey}/>
      })
    }
  </div>
  )
};

export default SquareLine;
