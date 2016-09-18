import { jss } from 'components';
import muiTheme from 'styles/customized-mui-theme';

const style = {
  img: {
    height: muiTheme.appBar.logoHeight,
  },
  imgSquare: {
    height: '110px',
    width: '100px',
    marginTop: '10px',
    marginBottom: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

const {
  classes: {
    img,
    imgSquare,
  },
} = jss.createStyleSheet(style).attach();

export {
  img,
  imgSquare,
};
