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

const tabKey = (link) => `aa-header-tabs--${link.replace(' ', '')}`;

type Props = {
  content: [],
  link: (to: string) => void,
  activeRoute: string,
  sheet: Object,
};

const HeaderMenuBar = ({
  content,
  link,
  activeRoute,
  sheet: { classes },
}: Props) => {
  const menuItems = content.filter((item) => (item.order === 1));
  const activeTabIndex = menuItems.findIndex((item) => item.link === activeRoute);

  return (
    <Tabs
      className={classes.tabs}
      tabItemContainerStyle={style.tabsContainer}
      value={activeTabIndex}>
      {menuItems.map((item, index) => (
        <Tab value={index}
          label={item.title}
          className={classes.tab}
          key={tabKey(item.link)}
          onActive={function () {
            link(item.link);
          }}
        />
      ))}
    </Tabs>
  );
};

export default useSheet(HeaderMenuBar, style);
