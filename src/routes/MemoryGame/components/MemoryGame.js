import React from "react";

export default ({
  round,
  restart
}) => {
  return (
  <div>
    <h2>Round: {round}</h2>
    <button className="button button--warning text-center" onClick={restart} disabled={round === 0}>Restart</button>
  </div>
)}
