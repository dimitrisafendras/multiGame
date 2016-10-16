let imageSize = '';

if(screen.width < 3200) {
  imageSize = '@3x';
} else if (screen.width > 1600) {
  imageSize = '@2x'
}

const Image = require('./image' + imageSize + '.jpeg');

export default Image;