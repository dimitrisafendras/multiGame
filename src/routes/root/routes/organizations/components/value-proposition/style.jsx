import muiTheme from 'styles/customized-mui-theme';
import Images from './images';

//
// The styles of the components
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
    backgroundPosition: '90.6% center',
    backgroundSize: '40%',
    top: '100px',
  },
  title: {
    width: '70%',
    marginBottom: '70px',
  },
  subtitle: {
    width: '60%',
  },
  text: {
    width: '60%',
    marginTop: '20px',
    maxWidth: '624px',
  },
  button: {
    marginTop: '50px',
  },
  '@media (max-width: 1250px)': {
    backgroundImage: {
      top: '105px',
    },
    title: {
      marginBottom: '50px',
    },
   },
  '@media (max-width: 1024px)': {
    backgroundImage: {
      backgroundSize: '43%',
      top: '130px',
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
      marginBottom: '40px',
      top: '0px',
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
      marginTop: '15px',
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