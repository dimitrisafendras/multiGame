import React from 'react';
import { useSheet } from 'components/jss';
import muiTheme from 'styles/customized-mui-theme';
import {
  Tabs,
  Tab,
} from 'material-ui';

const style = {
  tabs: {
    position: 'absolute',
    top: '0px',
    right: '30px',
    width: '100%',
    paddingRight: '68px',
    paddingLeft: '320px',
    lineHeight: '58px',
    boxSizing: 'border-box',
    zIndex: 1100,
    maxWidth: '700px',
  },
  tab: {
    height: muiTheme.appBar.height,
    fontSize: '13px',
    fontWeight: '700',
  },
  '@media (max-width: 767px)': {
    tabs: {
      display: 'none',
    },
  },
};

const tabKey = (link) => `aa-header-tabs--${link.replace(' ', '')}`;

const HeaderMenuBar = ({ content, link, activeRoute, sheet }) => {
  const activeTabIndex = (
    content
    .filter((item) => (item.order === 1))
    .findIndex((item) => item.link === activeRoute)
  );

  const { classes } = sheet;

  return (
    <div className={classes.tabs}>
      <Tabs value={activeTabIndex}>
        {content.filter((item) => (item.order === 1)).map((item, index) => (
          <Tab value={index}
            label={item.title}
            style={style.tab}
            key={tabKey(item.link)}
            onActive={function () {
              link(item.link);
            }} />
          ))}
      </Tabs>
    </div>
  );
};

HeaderMenuBar.propTypes = {
  content: React.PropTypes.array,
  link: React.PropTypes.func,
  activeRoute: React.PropTypes.string,
  sheet: React.PropTypes.object,
};

export default useSheet(HeaderMenuBar, style);
