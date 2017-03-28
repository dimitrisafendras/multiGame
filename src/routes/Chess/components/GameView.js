import React, { Component } from 'react';
import Chess from '../containers/Chess';
import ChessButton from '../containers/ChessButton';

const GameView = ({ mode })=> {
  if(!mode) {
    return <div>
            <h1>Chess</h1>
            <h2> Choose Mode </h2>
            <ChessButton mode = {'online'}/>
            <ChessButton mode = {'offline'}/>
          </div>
  }
  if (mode){
    return <div>
              <h1>Chess</h1>
              <Chess/>
            </div>
  }
  return <div>ERROR</div>
};


export default GameView;
