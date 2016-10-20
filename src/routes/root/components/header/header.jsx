import React from 'react';

import {
  AppBar,
  IconButton,
} from 'material-ui';

import { Logo } from 'routes/root/components';
import {
  HeaderMenuBar,
  UserButton,
  UserButtonMobile,
} from './containers';

import { classes, styles as style } from './style';

import { signInEnabled } from './config';

type Props = {
  handleLeftIconButtonTouchTap: () => void,
  toggleAuthentication: () => void,
  activeRoute: string,
};

const Header = ({
  handleLeftIconButtonTouchTap,
  toggleAuthentication,
  activeRoute,
}: Props) => (
  <div className={classes.topBar}>
    <div className={classes.mainMenu}>
      <div className={classes.mainMenuHolder}>
        <div className={classes.appBarContainer}>
          <AppBar
            className={classes.appBar}
            title={<Logo className={classes.logo}  resizable={true} />}
            titleStyle={style.appBarTitleStyle}
            showMenuIconButton={false}
          />
        </div>
        <div className={classes.mainMenuContent}>

          {/* Header Tabs */}
          <div className={classes.mainMenuItem} style={style.mainMenuItemGrow}>
            <HeaderMenuBar {...{ activeRoute }} />
          </div>

          <div className={[classes.mainMenuItem, classes.mainMenuItemMobile].join(' ')}>
            <div className={classes.mainMenuIconContainer}>

              {signInEnabled && (
                <UserButtonMobile {...{
                  handleLeftIconButtonTouchTap,
                  toggleAuthentication,
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
                  toggleAuthentication,
                }} />
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default Header;
