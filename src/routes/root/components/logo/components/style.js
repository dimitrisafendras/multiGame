import { jss } from 'components';
import muiTheme from 'styles/customized-mui-theme';

const style = {
  img: {
    height: muiTheme.appBar.logoHeight,
  },
};

export const { classes: { img } } = jss.createStyleSheet(style).attach();
