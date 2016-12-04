import muiTheme from 'styles/customized-mui-theme';
import Images from './images';
import { jss, isIE11 } from 'components';

const styles = {
  component: {
    backgroundColor: muiTheme.palette.accent1Color,
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
    backgroundImage: isIE11 ? "url('images/organisations/hero.png')" : Images.HeroImage,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '90.6% center',
    backgroundSize: '38%',
    top: '40px',
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
    fontWeight: '300',

    '& strong': {
      fontWeight: '500',
    },
  },
  button: {
    marginTop: '50px',
  },
  '@media (max-width: 1300px)': {
    backgroundImage: {
      backgroundSize: '36%',
      top: '70px',
    },
    title: {
      marginBottom: '50px',
    },
  },
  '@media (max-width: 1024px)': {
    backgroundImage: {
      backgroundSize: '43%',
      top: '90px',
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

const classes = jss.createStyleSheet(styles).attach().classes;

export { styles, classes };