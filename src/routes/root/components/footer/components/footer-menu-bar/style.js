import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components';

const styles = {
  outerContainer: {
    backgroundColor: muiTheme.palette.grey100,
    color: muiTheme.palette.blue700,
    fontWeight: '700',
  },
  linksContainer: {
    borderTop: '1px solid ' + muiTheme.palette.borderColor,
  },
  links: {
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontSize: '13px',
    paddingLeft: '25px',
    paddingRight: '25px',
    paddingTop: '25px',
    paddingBottom: '25px',
  },
  copyrightContainer: {
    lineHeight: '60px',
    height: '60px',
    textAlign: 'center',
    borderBottom: '3px solid ' + muiTheme.palette.blue700,
  },
  copyright: {
    color: muiTheme.palette.blue700,
    fontSize: '12px',
    textDecoration: 'none',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};
const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
