import React, { Component } from 'react';
import SquareLine from './SquareLine';
import styles from './styles.scss'

const Chess = ()=> {
  return(
    <div>
      Chess
        <div className = {styles.board}>
          {
            [...Array(8).keys()].map((key) => {
              return < SquareLine key={key} lineKey = {key} id={key}/>
            })
          }
        </div>
    </div>
  )
};

export default Chess;

