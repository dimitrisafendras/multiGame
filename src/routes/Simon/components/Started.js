import React from 'react'
import { Pads } from '../containers/Pads'

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

export const Started = ({score, highScore, reset})=>(
<div style = {style}>
  <h1>Simon </h1>
  <Pads />
  <h2> SCORE: { score } </h2>
  <h5> HIGH SCORE: { highScore } </h5>
  <button type='reset' onClick={reset} style = {buttonStyle}>RESET</button>
</div>
);
