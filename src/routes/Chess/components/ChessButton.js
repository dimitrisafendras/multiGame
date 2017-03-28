import React, { Component } from 'react';

const ChessButton = ({ mode, chooseMode})=> {
  if (mode === 'online' || mode === 'offline'){
    return <button  onClick = {()=> chooseMode(mode)}>Play {mode}</button>
  }
  return <div>ERROR</div>
}

export default ChessButton;
