import React, { Component } from 'react';

import { useSheet } from 'components/jss';
import {
  Drawer,
  MenuItem,
  IconButton,
  FlatButton,
  FontIcon,
} from 'material-ui';

import { Signature } from 'routes/root/components';

import { style } from './style';

type Props = {
  content: [],
  link: () => void,
  open: boolean,
  toggleSidebar: () => void,
  handleLoginRegisterTouchTap: () => void,
  sheet: Object,
  user: Object,
  onSignOut: () => void,
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
    this.props.handleLoginRegisterTouchTap();
    this.handleToggle();
  };

  handleSignOut = () => {
    this.props.onSignOut();
    this.handleToggle();
    this.props.handleLoginRegisterTouchTap();
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
          onClick={this.props.handleLoginRegisterTouchTap}
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
    const { props, handleToggle } = this;
    const { content, link, sheet, user, onSignOut } = props;
    const { classes } = sheet;

    return (
      <Drawer
        onRequestChange={handleToggle}
        open={this.state.open}
        docked={false}
        openSecondary
        width={style.drawerContainer.width}>

        {!(user && user.email) ? (
          this.renderLoginButton()
        ) : (
          <FlatButton
            label={user.displayName}
            style={{
              ...style.drawerUserButtonHolder.button,
              ...style.drawerUserButtonHolder.buttonLast,
            }}
            onClick={this.handleSignOut}
          />
        )}

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
          {content.filter((item) => (item.order <= 2)).map((item) => (
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

export default useSheet(Sidebar, style);
