import React, { Component } from 'react';



const OnlinePlayers = ({ onlinePlayers, username, challengePlayer }) => {
  return (
    <div>
      <div>
        <i>Hi {username}</i>
        <br/>
        <span >  { onlinePlayers.length } online</span>
      </div>
      <ul>{
        onlinePlayers.map((user) => {
          if (user != username) {
            return (
              <li key={ user } onClick={ () => challengePlayer(username, user) }>
                { user }
              </li>
            );
          }
        })
      }
      </ul>

    </div>
  );
};

export default OnlinePlayers;
