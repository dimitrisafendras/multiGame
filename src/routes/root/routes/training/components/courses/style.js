import muiTheme from 'styles/customized-mui-theme';
import Image from './images';
import { jss } from 'components';

const styles = {
  outerContainer: {
    height: '1140px',
    overflow: 'visible',
    color: muiTheme.palette.grey600,
  },
  coursesContainer: {
    margin: '0 auto',
    position: 'relative',

    '& > div:first-child': {
      width: '100%',
    },
    '& > div:first-child > div:nth-child(2)': {
      margin: '0 auto',
    },
  },
  tabs: {
    width: '580px',
    margin: '0 auto',
  },
  divider: {
    width: '85%',
    minWidth: '605px',
    margin: '0 auto',
    position: 'relative',
    top: '116px',
    borderBottom: '1px solid' + muiTheme.palette.grey300,
  },
  backgroundImage: {
    background: `url(${Image}) no-repeat center 100%`,
    backgroundSize: 'cover',
  },
  scrollableContent: {
    height: '785px',
    maxWidth: '580px',
    margin: '0 auto',
  },
  contentWrapper: {
    backgroundColor: muiTheme.palette.white,
    boxShadow: '0px 0px 40px 0px rgba(0, 0, 0, 0.3)',
    width: '80%',
    height: '900px',
    margin: '0 auto',
    zIndex: '10',
    top: '-50px',

    '& a:link': {
      color: muiTheme.palette.blue700,
    },

    '& a:visited': {
      color: muiTheme.palette.cyan500,
    },

    '& a:hover': {
      color: muiTheme.palette.blue600,
    },

    '& a:active': {
      color: muiTheme.palette.blue200,
    },
  },
  sectionTitleWrapper: {
    color: muiTheme.palette.blue700,
    textTransform: 'uppercase',
    textAlign: 'center',
    borderBottom: `1px solid ${muiTheme.palette.grey300}`,
    marginBottom: '0px',
    fontSize: '24px !important',
    fontWeight: '500 !important',
    padding: '50px 0 15px !important',

    '&.active': {
      fontWeight: '500 !important',
    },

    '&.inactive': {
      fontWeight: '100 !important',
    },
  },
  sectionTitle: {
    borderBottom: `4px solid ${muiTheme.palette.blue700}`,
    paddingBottom: '27px',
    display: 'inline',
  },
  textWrapper: {
    paddingRight: '25px',
    paddingTop: '30px',

    '&:last-child': {
      marginBottom: '85px',
    },
  },
  title: {
    color: muiTheme.palette.blue700,
    marginTop: '25px',
    marginBottom: '15px',
  },
  inkBar: {
    backgroundColor: muiTheme.palette.blue700,
    height: '4px',
  },
  fade: {
    width: '95%',
    height: '100px',
    position: 'absolute',
    bottom: '-1px',
    left: '0px',
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
  more: {
    width: '100%',
    height: '100px',
    position: 'absolute',
    textAlign: 'center',
    color: 'rgba(25, 118, 210, .7)',
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    bottom: '0px',
    left: '0px',
    zIndex: '10',
    background: `-moz-linear-gradient(top, 
      rgba(224,224,224,0) 0%, 
      rgba(224,224,224,0.01) 2%, 
      rgba(224,224,224,0.06) 4%, rgba(224,224,224,0.69) 28%, rgba(224,224,224,1) 88%, 
      rgba(224,224,224,1) 100%, rgba(224,224,224,0.1) 101%)`,
    background: `-webkit-linear-gradient(top, 
      rgba(224,224,224,0) 0%,rgba(224,224,224,0.01) 2%,
      rgba(224,224,224,0.06) 4%,rgba(224,224,224,0.69) 28%,rgba(224,224,224,1) 88%,
      rgba(224,224,224,1) 100%,rgba(224,224,224,0.1) 101%)`,
    background: `linear-gradient(to bottom, 
      rgba(224,224,224,0) 0%,
      rgba(224,224,224,0.01) 2%,rgba(224,224,224,0.06) 4%,
      rgba(224,224,224,0.69) 28%,rgba(224,224,224,1) 88%,
      rgba(224,224,224,1) 100%,rgba(224,224,224,0.1) 101%)`,
    filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr='#00e0e0e0', endColorstr='#1ae0e0e0',GradientType=0 )`,
  },
  button: {
    marginTop: '4%',
  },
  dialog: {
    '& a:link': {
      color: muiTheme.palette.blue700,
    },

    '& a:visited': {
      color: muiTheme.palette.cyan500,
    },

    '& a:hover': {
      color: muiTheme.palette.blue600,
    },

    '& a:active': {
      color: muiTheme.palette.blue200,
    },
  },
  courses: {
    '&.scrollableContent': {
      maxWidth: '885px',
    },
    '& .tabWrapper': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px 0px',
    },
    '& .title': {
      marginTop: '0px',
    },
    '& .textWrapper': {
      background: muiTheme.palette.grey300,
      width: '275px',
      height: '240px',
      overflow: 'hidden',
      padding: '25px 20px',
      margin: '10px',
      boxSizing: 'border-box',
      position: 'relative',
      cursor: 'pointer',
    },
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
      overflow: 'visible',

      '& .slick-dots': {
        bottom: '-70px',
      },

      '& .slick-dots button:before': {
        color: muiTheme.palette.blue700 + ' !important',
      },

      // '& .slick-arrow:before': {
      //   color:  muiTheme.palette.grey200 + ' !important',
      // },
    },
    sectionTitleWrapper: {
      padding: '35px 0 30px !important',
      margin: '0 25px',
    },
    textWrapper: {
      paddingLeft: '25px',
      paddingTop: '0px',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export { styles, classes };
