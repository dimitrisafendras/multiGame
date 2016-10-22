import muiTheme from 'styles/customized-mui-theme';
import Image from './images';
import { jss } from 'components';

const styles = {
  outerContainer: {
    height: '1140px',
    overflow: 'visible',
    color: muiTheme.palette.grey600,
  },
  backgroundImage: {
    background: `url(${Image}) no-repeat center 100%`,
    backgroundSize: 'cover',
  },
  contentWrapper: {
    backgroundColor: muiTheme.palette.white,
    width: '80%',
    height: '900px',
    margin: '0 auto',
    zIndex: '10',
    top: '-50px',
  },
  container: {
    padding: '25px',
  },
  sectionTitleWrapper: {
    color: muiTheme.palette.blue700,
    textTransform: 'uppercase',
    textAlign: 'center',
    borderBottom: `1px solid ${muiTheme.palette.grey300}`,
    padding: '15px 0 30px',
  },
  sectionTitle: {
    borderBottom: `4px solid ${muiTheme.palette.blue700}`,
    paddingBottom: '27px',
    display: 'inline',
  },
  title: {
    color: muiTheme.palette.blue700,
    marginTop: '25px',
    marginBottom: '15px',
  },
  '@media (max-width: 767px)': {
    outerContainer: {
      height: '650px',
    },
    scrollableContent: {
      height: '500px',
    },
    contentWrapper: {
      height: '615px',
    },
    textWrapper: {
      '&:last-child': {
        paddingBottom: '100px',
      },
    },
    fade: {
      width: '100%',
      height: '100px',
      position: 'absolute',
      bottom: '0px',
      zIndex: '10',
      background: `-moz-linear-gradient(top, 
      rgba(255,255,255,0) 0%, 
      rgba(255,255,255,0.01) 2%, 
      rgba(255,255,255,0.06) 4%, rgba(255,255,255,0.69) 28%, rgba(255,255,255,1) 88%, 
      rgba(255,255,255,1) 100%, rgba(255,255,255,0.1) 101%)`,
      background: `-webkit-linear-gradient(top, 
      rgba(255,255,255,0) 0%,rgba(255,255,255,0.01) 2%,
      rgba(255,255,255,0.06) 4%,rgba(255,255,255,0.69) 28%,rgba(255,255,255,1) 88%,
      rgba(255,255,255,1) 100%,rgba(255,255,255,0.1) 101%)`,
      background: `linear-gradient(to bottom, 
      rgba(255,255,255,0) 0%,
      rgba(255,255,255,0.01) 2%,rgba(255,255,255,0.06) 4%,
      rgba(255,255,255,0.69) 28%,rgba(255,255,255,1) 88%,
      rgba(255,255,255,1) 100%,rgba(255,255,255,0.1) 101%)`,
      filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#1affffff',GradientType=0 )`,
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export { styles, classes };
