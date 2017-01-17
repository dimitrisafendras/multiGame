import React, { Component } from 'react';
import pictures from './../images';

export const HangmanPicture = ({errorsCount}) => {
  if (errorsCount <= 6){
  return (
    <div>
    <center>
      <img src={pictures[errorsCount]} width="225" height="200" />
    </center>
    </div>
  );
  }
  return (
  <div >
    <img src={pictures[7]} width="225" height="200"  />
  </div>
  )
}
