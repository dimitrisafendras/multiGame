import React, { Component } from 'react';
import styles from './styles.scss';

const OnlinePlayers = ({ onlinePlayers, username, challengePlayer }) => {
  return (
    <div className={styles}>
      <div>
        <h2>Hi <span>{username}</span> please choose an opponent</h2>
        <h3>  { onlinePlayers.length -1 } players online</h3>
      </div>
      <ul className={styles}>{
        onlinePlayers.map((user) => {
          if (user != username) {
            return (
              <li key={ user } onClick={ () => challengePlayer(username, user) }>
                <span className= {styles.user}> { user } </span>
              </li>
            )
          }
        })
      }
      </ul>
    </div>
  );
};

export default OnlinePlayers;
