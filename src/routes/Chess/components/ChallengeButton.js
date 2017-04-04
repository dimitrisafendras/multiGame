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

const ChallengeButton = ({ username, opponent, readyToPlay }) => {
  if (opponent) {
    return (
      <div>
        <button onClick={() => readyToPlay(username, opponent)} style={style.button}>ACCEPT</button>
        <button  style={style.button}>DECLINE</button>
      </div>
    );
  }
  return <div></div>;
};

export default ChallengeButton;
