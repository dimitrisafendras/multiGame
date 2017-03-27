const haveSelected = (selectedTile) => {
  if ( (selectedTile.line || selectedTile.line === 0) &&
    (selectedTile.square || selectedTile.square === 0)) return true;
  return false;
};

export default haveSelected;
