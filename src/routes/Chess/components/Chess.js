import React, { Component } from 'react';
import SquareLine from './SquareLine';
import styles from './styles.scss';
import { MAX_ROWS } from '../modules/constants';


const Chess = ({ squares })=> {
  return(
    <div>
      Chess
        <div className = {styles.board}>
          {
            [...Array(MAX_ROWS).keys()].map((key) => {
              return <SquareLine key={key} lineKey={key} squareLine={squares[key] } />
            })
          }
        </div>
    </div>
  )
};

export default Chess;

