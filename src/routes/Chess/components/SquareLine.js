import React from 'react';
import Square from '../containers/Square';
import styles from './styles.scss';
import { MAX_COLS } from '../modules/constants';

const SquareLine = ({lineKey, squareLine })=> {

  return (
  <div className={styles.line}>
    {
      [...Array(MAX_COLS).keys()].map((key)=> {
        return <Square key={key+(MAX_COLS*lineKey)} square = { squareLine[key] }
                line = {lineKey} col = {key} />
      })
    }
  </div>
  )
};

export default SquareLine;
