import muiTheme from 'styles/customized-mui-theme';
import Images from './images';

//
// The styles of the component
//
export const style = {
  component: {
    display: 'flex',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: muiTheme.appBar.maxWidth,
  },
  container: {
    backgroundColor: 'inherit',
    flexDirection: 'row !important',
  },
  backgroundImage: {
    position: 'relative',
    backgroundSize: '100% 100%',
    height: '250px',
    width: '50%',
    marginRight: '5%',
    backgroundImage: Images.Vision,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  title: {
    color: muiTheme.palette.blue700,
  },
  textWrapper: {
    width: '45%',
  },
  text: {
    width: '100%',
    marginTop: '20px',
    maxWidth: '624px',
  },
  '@media (max-width: 767px)': {
    container: {
      flexDirection: 'column !important',
    },
    backgroundImage: {
      width: '100%',
      position: 'relative',
      backgroundSize: '100% 100%',
      height: '200px',
      marginRight: '0px',
      marginBottom: '10px',
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