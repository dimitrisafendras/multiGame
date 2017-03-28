import React, { Component } from 'react';


const style = {
  button: {
    marginTop: '20px',
    color: 'black',
    border: '2px solid #a1a1a1',
    padding: '10px 40px',
    background: '#dddddd',
    width: '250px',
    borderRadius:'25px',
  }
};

const onClick = (mode, chooseMode, getReady) => {
  chooseMode(mode);
  if (mode === 'online') {
    getReady();
  }
}

const ChessButton = ({ mode, chooseMode, getReady })=> {
  if (mode === 'online' || mode === 'offline'){
    return <button  onClick = {()=> onClick(mode, chooseMode, getReady)} style = { style.button } >Play {mode}</button>
  }
  return <div>ERROR</div>
}

export default ChessButton;
