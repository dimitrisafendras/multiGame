import React, { Component } from 'react';


const style = {
  button: {
    margin: '20px',
    color: 'black',
    border: '2px solid #a1a1a1',
    padding: '10px 40px',
    background: '#dddddd',
    width: '250px',
    borderRadius:'25px',
  },
};

const ResetButton = ({ resetChess })=> (<button  onClick = {resetChess} style = { style.button } >RESET</button>);

export default ResetButton;
