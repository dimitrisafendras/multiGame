import React, { Component } from 'react';

import { compose } from 'store';

import {
  userSigninEnabledAble,
  contentAble,
  userAble,
  signOutAble,
  linkAble,
} from 'routes/root/containers';

import { LogoSmall, Signature } from 'routes/root/components';

import {
  Drawer,
  MenuItem,
  IconButton,
  FlatButton,
  FontIcon,
} from 'material-ui';

import {
  styles as style,
  classes,
} from './style';

type Props = {
  userSigninEnabled: boolean,
  content?: [],
  link: () => void,
  open: boolean,
  toggleSidebar: () => void,
  toggleAuthentication: () => void,
  user: Object,
  signOut: () => void,
};

class Sidebar extends Component {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentWillReceiveProps({ open }) {
    if (open !== this.state.open) {
      this.setState({ open });
    }
  }

  handleToggle = () => {
    if (this.props.toggleSidebar) {
      this.props.toggleSidebar();
    } else {
      this.setState({
        open: !this.state.open,
      });
    }
  };

  handleToggleAuth = () => {
    this.props.toggleAuthentication();
    this.handleToggle();
  };

  handleSignOut = () => {
    this.props.signOut();
    this.handleToggle();
    this.props.toggleAuthentication();
  };

  linkKey = (key) => `nav-drawer--${key.replace(' ', '')}`;

  renderLoginButton() {
    return (
      <div style={style.drawerUserButtonHolder}>
        {/* Login Button */}
        <FlatButton
          label={'Login'}
          labelPosition={'after'}
          style={style.drawerUserButtonHolder.button}
          icon={<FontIcon className={'material-icons'}>person</FontIcon>}
          onClick={this.props.toggleAuthentication}
        />

        {/* Register Button */}
        <FlatButton
          label={'Register'}
          style={{
            ...style.drawerUserButtonHolder.button,
            ...style.drawerUserButtonHolder.buttonLast,
          }}
          onClick={this.handleToggleAuth}
        />
      </div>
    );
  }

  render() {
    const {
      props: {
        userSigninEnabled,
        content = [],
        link,
        user,
      },
      handleToggle,
    } = this;

    return (
      <Drawer
        onRequestChange={handleToggle}
        open={this.state.open}
        docked={false}
        openSecondary
        width={style.drawerContainer.width}>

        {userSigninEnabled && (
          !(user && user.email) ? (
            this.renderLoginButton()
          ) : (
            <FlatButton
              label={user.displayName}
              onClick={this.handleSignOut} />
          )
        )}

        <LogoSmall className={classes.logo} />

        <IconButton
          touch
          style={style.closeButton}
          className={classes.icon}
          onClick={handleToggle}
          iconStyle={style.closeButton.icon}
          iconClassName={'material-icons'}>
          close
        </IconButton>

        <div className={classes.divider}>
          {content.map((item) => (
            <MenuItem
              innerDivStyle={style.menuItem}
              key={this.linkKey(item.link)}
              onTouchTap={function () {
                link(item.link);
                handleToggle();
              }}>
              {item.title}
            </MenuItem>
          ))}
        </div>

        <Signature />

      </Drawer>
    );
  }
}

export default compose(
  userSigninEnabledAble,
  contentAble,
  userAble,
  signOutAble,
  linkAble
)(Sidebar);
