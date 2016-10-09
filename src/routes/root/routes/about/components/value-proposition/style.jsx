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
    backgroundPosition: '90.4% center',
    backgroundSize: '30% 65%',
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
      backgroundSize: '40% 60%',
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
      backgroundSize: '95% 60%',
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
    title: {
      marginBottom: '10%',
    },
    text: {
      marginTop: '5%',
    },
  },
  '@media (max-width: 500px)': {
    backgroundImage: {
      backgroundSize: '95% 35%',
      opacity: '0.2',
    },
  },
  '@media (max-width: 400px)': {
    backgroundImage: {
      backgroundSize: '95% 25%',
      opacity: '0.2',
    },
  },
};