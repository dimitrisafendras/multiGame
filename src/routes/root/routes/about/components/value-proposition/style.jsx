import muiTheme from 'styles/customized-mui-theme';
import Images from './images';

//
// The styles of the component
//
export const style = {
  component: {
    backgroundColor: muiTheme.palette.blue600,
    display: 'flex',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: muiTheme.appBar.maxWidth,
  },
  container: {
    color: muiTheme.palette.white,
    backgroundColor: 'inherit',
  },
  backgroundImage: {
    backgroundImage: Images.HeroImage,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
    backgroundSize: '40% 45%',
  },
  title: {
    width: '70%',
  },
  subtitle: {
    width: '60%',
  },
  text: {
    width: '60%',
    marginTop: '70px',
    maxWidth: '624px',
  },
  button: {
    marginTop: '50px',
  },
  '@media (max-width: 1024px)': {
    backgroundImage: {
      backgroundSize: '55% 40%',
    },
    title: {
      width: '60%',
    },
    subtitle: {
      width: '50%',
    },
    text: {
      width: '50%',
    },
  },
  '@media (max-width: 767px)': {
    backgroundImage: {
      opacity: '0.2',
      backgroundSize: '95% 60%',
    },
    title: {
      width: '100%',
    },
    subtitle: {
      width: '100%',
    },
    text: {
      width: '100%',
      maxWidth: '100%',
      marginTop: '11%',
    },
  },
  '@media (max-width: 700px)': {
    backgroundImage: {
      backgroundSize: '95% 55%',
      opacity: '0.2',
    },
  },
  '@media (max-width: 600px)': {
    backgroundImage: {
      backgroundSize: '95% 45%',
      opacity: '0.2',
    },
    text: {
      marginTop: '11%',
    },
  },
  '@media (max-width: 500px)': {
    backgroundImage: {
      backgroundSize: '95% 35%',
      opacity: '0.2',
    },
    text: {
      marginTop: '11%',
    },
  },
  '@media (max-width: 400px)': {
    backgroundImage: {
      backgroundSize: '95% 25%',
      opacity: '0.2',
    },
  },
};