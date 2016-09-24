import React from "react";
import {AppBar, IconButton, FontIcon, FlatButton} from "material-ui";
import {Button} from "components";
import {useSheet} from "components/jss";
import {Logo} from "routes/root/components";
import HeaderMenuBar from "./components/header-menu-bar";
import {style} from "./style";

// import ProfileAndSigninTab from '../containers/profile-and-signin-tab';

const Header = (
  {
    content,
    link,
    handleLeftIconButtonTouchTap,
    handleLoginRegisterTouchTap,
    activeRoute,
    sheet,
    onSignOut,
    user,
  }
) => {
  const {classes} = sheet;

  const userButtonMobile = !(user && user.email) ? (
    <IconButton
      title="Login / Register"
      className={classes.headerMenuBarButton}
      style={style.headerMenuBar.button}
      iconStyle={style.headerMenuBar.icon}
      onClick={handleLoginRegisterTouchTap}
      iconClassName={'material-icons'}>
        person
    </IconButton>
  ) : (
    <IconButton
      title="Logout"
      className={classes.headerMenuBarButton}
      style={style.headerMenuBar.button}
      iconStyle={style.headerMenuBar.icon}
      onClick={onSignOut}
      iconClassName={['material-icons', classes.headerMenuBarButtonUserLoggedIn].join(' ')}
      >
        exit_to_app
    </IconButton>
  );

  const userButton = !(user && user.email) ? (
    <FlatButton
      title="Login / Register"
      className={[
        classes.headerMenuBarButton,
        classes.headerMenuBarButtonLogin,
      ].join(' ')}
      style={style.headerMenuBar.button}
      onClick={handleLoginRegisterTouchTap}
      label="Login / Register"
      icon={
        <FontIcon
          className={'material-icons'}>
          person
        </FontIcon>
      }
      hoverColor={'transparent'}
    />
  ) : (
    <div>
      <FlatButton
        title="Profile"
        className={[
          classes.headerMenuBarButton,
          classes.headerMenuBarButtonLogin,
          classes.headerMenuBarButtonLoggedIn
        ].join(' ')}
        style={style.headerMenuBar.button}
        label={`Welcome,  ${ (user.name) ? user.name : user.email }`}
        icon={
          <FontIcon
            style={style.headerMenuBar.menuIcon}
            className={'material-icons'}
            icon>
            notifications
          </FontIcon>
        }
      />
      <FlatButton
        title="Logout"
        className={[
          classes.headerMenuBarButton,
          classes.headerMenuBarButtonLogout
        ].join(' ')}
        style={style.headerMenuBar.button}
        onClick={onSignOut}
        label={`logout`}
      />
    </div>
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
          <HeaderMenuBar {...{content, link, activeRoute}} />
        </div>

        {/* Header Mobile Icons */}
        <div className={[classes.mainMenuItem, classes.mainMenuItemMobile].join(' ')}>
          <div className={classes.mainMenuIconContainer}>
            {/* User Icon */}
            {userButtonMobile}

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

        {/* Header Tablet/Desktop Icons */}
        <div className={[classes.mainMenuItem, classes.mainMenuItemTablet].join(' ')}>
          <div className={classes.mainMenuIconContainer}>
            {/* User Icon */}
            {userButton}
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
