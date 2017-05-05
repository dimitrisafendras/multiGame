import React, { Component } from 'react';
import { ALPHABET } from '../constants';

const style = {
  padding: '8px',
  background: '#dddddd',
  width: '32px',
  bordeRadius: '5px',
};

export const Keyboard = ({ guessLetter, usedLetters }) => {
  let handleBtnClick = (letter) => {
    guessLetter(letter);
    console.log(usedLetters);
  };
  return (
    <div>
      {ALPHABET.map( elem =>
        <button type="button"
                key={elem}
                onClick={(letter) => handleBtnClick(elem)}
                disabled={usedLetters.indexOf(elem) > -1}
                style={style}
                >
            {elem}
        </button>
      )}
    </div>
  );
};
