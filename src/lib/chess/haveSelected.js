const haveSelected = (selectedTile) => {
  if ( (selectedTile.line || selectedTile.line === 0) &&
    (selectedTile.col || selectedTile.col === 0)) return true;
  return false;
};

export default haveSelected;
