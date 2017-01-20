import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { authSocket } from '../../../model-services/server-apis';
import { store } from 'main';

const style = {
  button: {
    color: 'black',
    border: '2px solid #a1a1a1',
    padding: '10px 40px',
    background: '#dddddd',
    width: '250px',
    borderRadius:'25px',
  },
  input: {
    color: 'black',
     width: "280px",
     height: "40px"
  }
};

let SignInButton = ({onSubmit}) => (
  <form method="post" encType="multipart/form-data" onSubmit={onSubmit} >
   <fieldset style = {{border: '0'}}>
        <input type="text" name="username" placeholder="Enter Your Username.." style = {style.input} autoFocus/>
        <br/>
        <br/>
        <input type="submit" value="Log In" style = {style.button} />
     </fieldset>
  </form>
);

authSocket.on('dispachAction', (action) => {
  alert('im in');
  store.dispatch(action);
});

SignInButton = connect(
  null,
  (dispatch) => ({
    onSubmit: (e) => {
      e.preventDefault();

      axios
      .get(`/auth/${e.target.username.value}`)
      .then(
        (response) => {
          alert(response.data);
          authSocket.emit('newAction', {
            type: 'LOG_IN',
            payload: {
              username: response.data
            }
          });
        }
      )
    }
  })
)(SignInButton);

export { SignInButton };
