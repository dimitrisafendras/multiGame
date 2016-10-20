import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

const styles = {
  component: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: muiTheme.palette.grey100,
  },
  contentWrapper: {
    width: '100%',
    maxWidth: muiTheme.appBar.maxWidth,
  },
  container: {
    backgroundColor: 'inherit',
    flexDirection: 'row !important',
  },
  title: {
    color: muiTheme.palette.blue700,
  },
  sliderOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
  },
  imagesContainer: {
    display: 'block',
    width: '50%',
    height: '50%',

    '& .slick-dots': {
      bottom: '5px',
    },

    '& .slick-dots button:before': {
      fontSize: '15px',
      color: 'white !important',
      opacity: '0.5',
    },
  },
  imagesWrapper: {
    height: '100%',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textWrapper: {
    width: '50%',
    paddingLeft: '9.4%',
    paddingRight: '9.4%',
    boxSizing: 'border-box',
  },
  text: {
    width: '100%',
    color: muiTheme.palette.grey600,
  },
  '@media (max-width: 1599px)': {
    container: {
      flexDirection: 'column !important',
    },
    textWrapper: {
      width: '100%',

      '&:before': {
        content: '""',
        display: 'block',
        paddingTop: '9.4%',
      },

      '&:after': {
        content: '""',
        display: 'block',
        paddingBottom: '9.4%',
      },
    },
    imagesContainer: {
      width: '100%',
      height: '330px',
      position: 'relative',
    },
    imagesWrapper: {
      height: '330px !important',
      maxWidth: '100%',
      position: 'relative',
    },
    image: {
      height: '1100px',
      width: 'auto',
      position: 'absolute',
      top: '50%',
      left: '0%',
      transform: 'translate(0%, -50%)',
    },
  },
  '@media (max-width: 767px)': {
    imagesContainer: {
      height: 'auto !important',
    },
    imagesWrapper: {
      height: 'auto !important',
    },
    image: {
      height: '100%',
      width: '100%',
      position: 'relative',
      top: '0px',
      left: '0px',
      transform: 'none',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
