import React from 'react';

const InputWidget = (props)=> (
  <input type="text"
         onChange={props.update}
  />
);

export default InputWidget;
