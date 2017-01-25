import axios from 'axios';

export const logIn = (username) => (dispatch) => {
  axios
    .get(`/logIn/${username}`)
    .then(
      (response) => {
        if (response.data) {
          dispatch({
            type: 'LOG_IN',
            payload: {
              username: response.data
            }
          })
        }
        else {
          alert('Invalid Name')
        }
      });
};
