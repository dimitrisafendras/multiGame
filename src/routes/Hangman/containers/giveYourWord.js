
import { connect } from 'react-redux';
import React from 'react';
import { checkWord } from '../Modules/actions';

const style = {
  button: {
    border: '2px solid #a1a1a1',
    padding: '10px 40px',
    background: '#dddddd',
    width: '250px',
    borderRadius:'25px',
  },
  input: {
     width: "280px",
     height: "40px"
  }
}

let GiveYourWord = ({ onSubmit }) => (
     <form action="" method="post" enctype="multipart/form-data" onSubmit={onSubmit} >
      <fieldset style = {{border: '0'}}>
           <input type="password" id="password" name="password" placeholder="Enter Your Word.." style = {style.input} autoFocus/>
           <br/>
           <br/>
           <input type="submit" value="Start" style = {style.button} />
        </fieldset>
     </form>
  );

GiveYourWord = connect(
  null,
  (dispatch) => ({
    onSubmit: (e) => {
      e.preventDefault();
      dispatch(checkWord(e.target.password.value.toLowerCase()));
    },
  }),
)(GiveYourWord);

export { GiveYourWord };
