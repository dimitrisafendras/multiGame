import muiTheme from 'styles/customized-mui-theme';
import Images from './images';

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
    backgroundPosition: '90.4% center',
    backgroundSize: '50%',
  },
  title: {
    width: '70%',
    marginBottom: '70px',
  },
  subtitle: {
    width: '60%',
  },
  text: {
    width: '38%',
    marginTop: '20px',
    maxWidth: '624px',
  },
  button: {
    marginTop: '50px',
  },
  '@media (max-width: 1250px)': {
    title: {
      marginBottom: '50px',
    },
  },
  '@media (max-width: 1024px)': {
    backgroundImage: {
      backgroundSize: '40%',
    },
    title: {
      width: '60%',
      marginBottom: '40px',
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
      backgroundSize: '81.8%',
      backgroundPosition: 'center',
    },
    title: {
      width: '100%',
      marginBottom: '30px',
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
  '@media (max-width: 600px)': {
    title: {
      marginBottom: '10%',
    },
    text: {
      marginTop: '5%',
    },
  },
};