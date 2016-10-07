import React from 'react';
import { useSheet } from 'components/jss';
import {
  Tabs,
  Tab,
} from 'material-ui';

const style = {
  tabs: {
    height: '100%',
    lineHeight: '100%',
    boxSizing: 'border-box',
    zIndex: 1100,
  },
  tabsContentContainer: {},
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

const tabKey = (link) => `aa-header-tabs--${link.replace(' ', '')}`;

const HeaderMenuBar = ({ content, link, activeRoute, sheet }) => {
  const activeTabIndex = (
    content
    .filter((item) => (item.order === 1))
    .findIndex((item) => item.link === activeRoute)
  );

  const { classes } = sheet;

  return (
    <Tabs value={activeTabIndex}
      className={classes.tabs}
      tabItemContainerStyle={style.tabsContentContainer}>
      {content.filter((item) => (item.order === 1)).map((item, index) => (
        <Tab value={index}
          label={item.title}
          className={classes.tab}
          key={tabKey(item.link)}
          onActive={function () {
            link(item.link);
          }} />
        ))}
    </Tabs>
  );
};

HeaderMenuBar.propTypes = {
  content: React.PropTypes.array,
  link: React.PropTypes.func,
  activeRoute: React.PropTypes.string,
  sheet: React.PropTypes.object,
};

export default useSheet(HeaderMenuBar, style);
