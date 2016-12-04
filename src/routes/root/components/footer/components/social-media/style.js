import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

const styles = {
  container: {
    backgroundColor: muiTheme.palette.grey100,
    paddingTop: '50px',
    paddingBottom: '50px',
    paddingLeft: '30px',
    paddingRight: '30px',
    boxSizing: 'border-box',
  },
  logo: {
    height: '57px',
    width: '290px',
    marginRight: '20px',
    marginLeft: '20px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  socialWrapper: {
    width: '335px',
    display: 'inherit',
    marginRight: '20px',
    marginLeft: '20px',
    marginTop: '20px',
    marginBottom: '20px',
  },
  socialContainer: {
    width: '70px',
    height: 'auto',
    marginRight: '22.5px',
    marginLeft: '22.5px',
  },
  socialLink: {
    textDecoration: 'none',
    color: muiTheme.palette.blue700,
  },
  socialText: {
    marginTop: '10px',
    textAlign: 'center',
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
