import React from 'react';

import {
  AppBar,
  IconButton,
  FontIcon,
} from 'material-ui';

import { Button, Link } from 'components';

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

  const userIcon = !(user && user.email) ? (
    <IconButton
      style={style.headerMenuBar.button}
      iconStyle={style.headerMenuBar.icon}
      onClick={handleLoginRegisterTouchTap}>
      <FontIcon
        className={'material-icons'}>
        person
      </FontIcon>
    </IconButton>
  ) : (
    <Button
      className={classes.button}
      onClick={onSignOut}
      style={{
        ...style.headerMenuBar.button,
        ...style.headerMenuBar.icon,
      }}>
      {user.displayName || user.email}
    </Button>
  );

  return (
    <div className={classes.mainMenu}>
      <div className={classes.appBarContainer}>
        <AppBar
          style={style.appBar}
          title={<Logo />}
          titleStyle={style.appBarTitleStyle}
          showMenuIconButton={false}
        />
      </div>
      <div className={classes.mainMenuContent}>
        <div className={classes.mainMenuItem}>
          {/* Header Tabs */}
          <div style={style.headerMenuBar}>
            <HeaderMenuBar {...{ content, link, activeRoute }} />
            { /* <ProfileAndSigninTab */ }
            { /* handleLoginRegisterTouchTap={handleLoginRegisterTouchTap} */ }
            { /* /> */ }
          </div>
        </div>

        <div className={classes.mainMenuItem}>
          {/* User Icon */}
          <div style={style.headerMenuBar.mobile}>
            {userIcon}
          </div>
        </div>

        <div className={classes.mainMenuItem}>
          {/* Menu Icon */}
          <IconButton
            style={style.headerMenuBar.button}
            iconStyle={{
              ...style.headerMenuBar.icon,
              ...style.headerMenuBar.menuIcon,
            }}
            onTouchTap={handleLeftIconButtonTouchTap}
            iconClassName={'material-icons'}
            className={classes.appBarIconStyleRight}>
            menu
          </IconButton>
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
