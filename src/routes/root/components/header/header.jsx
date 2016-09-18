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
      <AppBar
        style={style.appBar.container}
        title={<Logo />}
        titleStyle={style.appBar.titleStyle}
        showMenuIconButton={false}
        iconElementRight={
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
        }
        iconStyleRight={style.appBar.iconStyleRight}
      />
      <div>
        <div style={style.headerMenuBar.mobile}>
          {userIcon}
        </div>

        <div style={style.headerMenuBar}>
          <HeaderMenuBar {...{ content, link, activeRoute }} />
          { /* <ProfileAndSigninTab */ }
            { /* handleLoginRegisterTouchTap={handleLoginRegisterTouchTap} */ }
          { /* /> */ }
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
