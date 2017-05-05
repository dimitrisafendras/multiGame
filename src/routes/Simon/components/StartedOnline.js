import React from 'react'
import { PadsOnline } from '../containers/PadsOnline'

const buttonStyle = {
  border: '2px solid #a1a1a1',
  padding: '10px 40px',
  background: '#dddddd',
  width: '250px',
  borderRadius:'25px',
};
const style = {
  fontFamily: "Times New Roman",
  color: 'black',
};

export const StartedOnline = ({score, highScore, onlinePlayers, reset, startGameOnline})=>(
  <div style = {style}>
    <h1>Simon </h1>
    <PadsOnline />
    <h2> SCORE: { score } </h2>
    <h5> HIGH SCORE: { highScore } </h5>
    <p>online players {onlinePlayers}</p>
    <button type='reset' onClick={reset} style = {buttonStyle}>RESET</button>
    <button type='reset' onClick={startGameOnline} style = {buttonStyle}>RESET</button>
  </div>
);
