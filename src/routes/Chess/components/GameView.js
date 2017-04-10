import React, { Component } from 'react';
import Chess from '../containers/Chess';
import ChessButton from '../containers/ChessButton';
import ResetButton from '../containers/ResetButton';
import OnlinePlayers from '../containers/OnlinePlayers';
import ChallengeButton from '../containers/ChallengeButton';

const GameView = ({ mode, playerColor }) => {

  if(!mode) {
    return <div>
      <h1>Chess</h1>
      <h2> Choose Mode </h2>
      <ChessButton mode = {'online'} />
      <ChessButton mode = {'offline'} />
    </div>
  }

  if(mode === 'online' && !playerColor) {

    return <div>
      <h1>Chess</h1>
      <OnlinePlayers/>
      <ChallengeButton/>
      <ResetButton/>
    </div>
  }

  if (mode === 'offline' || mode === 'online' && playerColor){
    return <div>
      <Chess/>
      <ResetButton/>
    </div>
  }
  return <div>ERROR</div>
};

export default GameView;
