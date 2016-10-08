import React from 'react';

import {
  AppBar,
  IconButton,
} from 'material-ui';

import { useSheet } from 'components/jss';
import { Logo } from 'routes/root/components';
import {
  HeaderMenuBar,
  UserButton,
  UserButtonMobile,
} from './containers';

import { style } from './style';

import { signInEnabled } from './config';

type Props = {
  handleLeftIconButtonTouchTap: () => void,
  handleLoginRegisterTouchTap: () => void,
  activeRoute: string,
  sheet: Object,
};

const Header = ({
  handleLeftIconButtonTouchTap,
  handleLoginRegisterTouchTap,
  activeRoute,
  sheet: { classes },
}: Props) => (
  <div className={classes.mainMenu}>
    <div className={classes.appBarContainer}>
      <AppBar
        style={style.appBar}
        title={<Logo className={classes.logo} />}
        titleStyle={style.appBarTitleStyle}
        showMenuIconButton={false}
      />
    </div>
    <div className={classes.mainMenuContent}>

      {/* Header Tabs */}
      <div className={classes.mainMenuItem} style={style.mainMenuItemGrow}>
        <HeaderMenuBar activeRoute={activeRoute} />
      </div>

      <div className={[classes.mainMenuItem, classes.mainMenuItemMobile].join(' ')}>
        <div className={classes.mainMenuIconContainer}>

          {signInEnabled && (
            <UserButtonMobile {...{
              handleLeftIconButtonTouchTap,
              handleLoginRegisterTouchTap,
            }} />
          )}

          {/* Menu Icon */}
          <IconButton
            iconStyle={{
              ...style.headerMenuBar.icon,
              ...style.headerMenuBar.menuIcon,
            }}
            onTouchTap={handleLeftIconButtonTouchTap}
            iconClassName={'material-icons'}
            className={[classes.headerMenuBarButton, classes.headerMenuBarButtonMenu].join(' ')}>
            menu
          </IconButton>
        </div>
      </div>

      <div className={[classes.mainMenuItem, classes.mainMenuItemTablet].join(' ')}>
        <div className={classes.mainMenuIconContainer}>
          {signInEnabled && (
            <UserButton {...{
              handleLeftIconButtonTouchTap,
              handleLoginRegisterTouchTap,
            }} />
          )}
        </div>
      </div>

    </div>
  </div>
);

export default useSheet(Header, style);
