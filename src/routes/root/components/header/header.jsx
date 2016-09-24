import React from 'react';

import {
  AppBar,
  Avatar,
  IconButton,
  FontIcon,
} from 'material-ui';

import { Button } from 'components';

import { useSheet } from 'components/jss';

import { Logo } from 'routes/root/components';
import HeaderMenuBar from './components/header-menu-bar';
import { style } from './style';

// import ProfileAndSigninTab from '../containers/profile-and-signin-tab';

const Header = ({
  content,
  link,
  handleLeftIconButtonTouchTap,
  handleLoginRegisterTouchTap,
  activeRoute,
  sheet,
  onSignOut,
  user,
}) => {
  const { classes } = sheet;

  const userButton = !(user && user.email) ? (
    <IconButton
      className={classes.headerMenuBarButton}
      style={style.headerMenuBar.button}
      iconStyle={style.headerMenuBar.icon}
      onClick={handleLoginRegisterTouchTap}
      iconClassName={'material-icons'}>
        person
    </IconButton>
  ) : (
    <IconButton
      className={classes.headerMenuBarButton}
      style={style.headerMenuBar.button}
      iconStyle={style.headerMenuBar.icon}
      onClick={handleLoginRegisterTouchTap}
      iconClassName={['material-icons', classes.headerMenuBarButtonUserLoggedIn].join(' ')}
      >
        notifications
    </IconButton>
  );

  return (
    <div className={classes.mainMenu}>
      <div className={classes.appBarContainer}>
        <AppBar
          style={style.appBar}
          title={<Logo className={classes.logo}/>}
          titleStyle={style.appBarTitleStyle}
          showMenuIconButton={false}
        />
      </div>
      <div className={classes.mainMenuContent}>

        {/* Header Tabs */}
        <div className={classes.mainMenuItem} style={style.mainMenuItemGrow}>
          <HeaderMenuBar {...{ content, link, activeRoute }} />
        </div>

        {/* Header Icons */}
        <div className={classes.mainMenuItem}>
          <div className={classes.mainMenuIconContainer}>
            {/* User Icon */}
            {userButton}

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

      </div>
    </div>
  );
};

Header.propTypes = {
  content: React.PropTypes.array,
  link: React.PropTypes.func,
  handleLeftIconButtonTouchTap: React.PropTypes.func,
  handleLoginRegisterTouchTap: React.PropTypes.func,
  activeRoute: React.PropTypes.string,
  sheet: React.PropTypes.object,
  onSignOut: React.PropTypes.func,
  user: React.PropTypes.object,
};

export default useSheet(Header, style);
