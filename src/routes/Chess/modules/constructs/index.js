import React from 'react'

const tmp = (()=> {
  return (
  <div>
    &#9812;
  </div>
  )
})();

const figures = new Map([
  ['king', tmp],
]);

export default (key)=> (figures.get(key));
