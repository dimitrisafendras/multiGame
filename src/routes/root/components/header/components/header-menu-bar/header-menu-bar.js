import React from 'react';

import {
  Tabs,
  Tab,
} from 'material-ui';

import {
  classes,
  styles,
} from './style';

const tabKey = (link) => `aa-header-tabs--${link.replace(' ', '')}`;

type Props = {
  content?: [],
  link: (to: string) => void,
  activeRoute: string,
};

const HeaderMenuBar = ({
  content = [],
  link,
  activeRoute,
}: Props) => {
  const menuItems = content.filter((item) => (item.order === 1));
  const activeTabIndex = menuItems.findIndex((item) => item.link === activeRoute);

  return (
    <Tabs
      className={classes.tabs}
      tabItemContainerStyle={styles.tabsContainer}
      value={activeTabIndex}>
      {menuItems.map((item, index) => (
        <Tab value={index}
          label={item.title}
          className={classes.tab}
          key={tabKey(item.link)}
          onActive={function () { link(item.link); }}
        />
      ))}
    </Tabs>
  );
};

export default HeaderMenuBar;
