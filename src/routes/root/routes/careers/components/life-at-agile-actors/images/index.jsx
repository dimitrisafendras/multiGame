const imageSize = (screen.width < 768 || screen.width > 1600)? '' : '-large';

const image1 = require('./image1' + imageSize + '.png');
const image2 = require('./image2' + imageSize + '.png');
const image3 = require('./image3' + imageSize + '.png');
const image4 = require('./image4' + imageSize + '.png');
const image5 = require('./image5' + imageSize + '.png');
const image6 = require('./image6' + imageSize + '.png');
const image7 = require('./image7' + imageSize + '.png');

const Images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
];

export default Images;
