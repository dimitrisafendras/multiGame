import React from 'react';

import {
  AppBar,
  IconButton,
  FontIcon,
} from 'material-ui';
import { useSheet } from 'components/common/jss';

import HeaderMenuBar from './header-menu-bar';
import muiTheme from 'styles/customized-mui-theme';
import { Logo } from 'components/agile-actors';

// import ProfileAndSigninTab from './profile-and-signin-tab';
// var classNames = require('classnames/bind');

const style = {
  appBar: {
    container: {
      boxShadow: 'none',
      overflow: 'hidden',
    },
    titleStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'left',
      overflow: 'hidden',
      height: 60,
      maxHeight: 60,
    },
    iconStyleRight: {
      marginTop: 0,
      marginRight: -24,
      marginLeft: 'auto',
    },
  },
  appBarIconStyleRight: {
    marginTop: 0,
    marginRight: -24,
    marginLeft: 'auto',
  },
  mainMenu: {
    position: 'fixed',
    top: '0px',
    width: '100%',
    maxWidth: muiTheme.appBar.maxWidth,
    zIndex: '100',
  },
  headerMenuBar: {
    mobile: {
      position: 'fixed',
      top: 0,
      right: 60,
      zIndex: 1200,
      height: 60,
    },
    button: {
      height: 60,
      width: 60,
      padding: 6,
      borderLeft: `1px solid ${muiTheme.palette.grey300}`,
    },
    icon: {
      height: 48,
      lineHeight: '48px',
      width: 48,
      color: muiTheme.palette.cyan400,
    },
    loggedInIcon: {
      color: muiTheme.palette.blue600,
      notificationBall: {
        width: 6,
        height: 6,
        display: 'block',
        background: muiTheme.palette.cyan400,
        borderRadius: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 1000,
        transform: 'translate(2px, -8px)',
        border: `1px solid ${muiTheme.palette.white}`,
      },
    },
    menuIcon: {
      color: muiTheme.palette.blue600,
    },
  },
  '@media (min-width: 768px)': {
    appBar: {
      iconStyleRight: {
        display: 'none !important',
      },
    },
    appBarIconStyleRight: {
      display: 'none !important',
    },
    headerMenuBar: {
      mobile: {
        display: 'none !important',
      },
    },
  },
  '@media (min-width: 1200px)': {
    appBar: {
      container: {
        maxHeight: 78,
      },
    },
  },
};

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
        <div style={
            style.headerMenuBar.mobile
          }>
          {
            !(user && user.email) ? (
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
              <IconButton
                style={style.headerMenuBar.button}
                iconStyle={style.headerMenuBar.loggedInIcon}
                onClick={onSignOut}>
                <FontIcon
                  className={'material-icons'}>
                  person
                </FontIcon>
              </IconButton>
            )
          }
        </div>

        <div style={style.headerMenuBar}>
          <HeaderMenuBar
            {...{ content, link, activeRoute }}
          />
          { /* <ProfileAndSigninTab */ }
            { /* handleLoginRegisterTouchTap={handleLoginRegisterTouchTap} */ }
          { /* /> */ }
        </div>
      </div>
    </div>
  );
};

/**
 *
 <ProfileAndSigninTab
 handleLoginRegisterTouchTap={handleLoginRegisterTouchTap}
 />
 */

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
