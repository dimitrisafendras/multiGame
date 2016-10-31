import { jss } from 'components';

const styles = {
  tabs: {
    height: '100%',
    lineHeight: '100%',
    boxSizing: 'border-box',
    zIndex: 1100,
  },
  tabsContainer: {},
  tab: {
    height: '68px',
    fontSize: '13px',
    fontWeight: '700',
  },
  '@media (max-width: 767px)': {
    tabs: {
      display: 'none',
    },
  },
};

const classes = jss.createStyleSheet(styles).attach().classes;

export {
  styles,
  classes,
};
