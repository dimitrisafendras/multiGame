import muiTheme from 'styles/customized-mui-theme';
import Images from './images';

//
// The styles of the component
//
export const style = {
  component: {
    backgroundColor: muiTheme.palette.grey200,
    display: 'flex',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: muiTheme.appBar.maxWidth,
  },
  container: {
    backgroundColor: 'inherit',
  },
  backgroundImage: {
    backgroundImage: Images.Vision,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
    backgroundSize: '40% 75%',
  },
  title: {
    color: muiTheme.palette.blue700,
  },
  text: {
    width: '45%',
    marginTop: '20px',
    maxWidth: '624px',
  },
  '@media (max-width: 1300px)': {
    backgroundImage: {
      backgroundSize: '45% 75%',
    },
  },
  '@media (max-width: 1024px)': {
    container: {
      flexDirection: 'row !important',
    },
    backgroundImage: {
      position: 'relative',
      backgroundSize: '100%',
      height: '200px',
      width: '45%',
      marginRight: '5%',
    },
    textWrapper: {
      width: '50%',
    },
    text: {
      width: '100%',
    }
  },
  '@media (max-width: 767px)': {
    container: {
      flexDirection: 'column !important',
    },
    backgroundImage: {
      width: '100%',
      position: 'relative',
      backgroundSize: '100% 100%',
      height: '300px',
      marginRight: '0px',
    },
    textWrapper: {
      width: '100%',
    },
    text: {
      width: '100%',
      maxWidth: '100%',
      marginTop: '15px',
    },
  },
  '@media (max-width: 600px)': {
    text: {
      marginTop: '5%',
    },
  },
};