import muiTheme from 'styles/customized-mui-theme';
import Images from './images';
import { jss, isIE11 } from 'components';

const styles = {
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
    backgroundImage: isIE11 ? "url('images/about/hero.png')" : Images.HeroImage,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '90.4% center',
    backgroundSize: '35%',
  },
  title: {
    width: '70%',
    marginBottom: '70px',
  },
  subtitle: {
    width: '60%',
  },
  text: {
    width: '55%',
    marginTop: '20px',
    fontWeight: '300',

    '& strong': {
      fontWeight: '500',
    },
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
      backgroundSize: '81.8% 81.8%',
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
      marginTop: '15px',
    },
    button: {
      justifyContent: 'center',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export { styles, classes };
