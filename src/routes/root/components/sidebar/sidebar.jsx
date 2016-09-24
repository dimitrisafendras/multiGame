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
  sheet: Object,
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

  linkKey = (key) => `nav-drawer--${key.replace(' ', '')}`;

  render() {
    const { props, handleToggle } = this;
    const { content, link, sheet } = props;
    const { classes } = sheet;

    return (
      <Drawer
        onRequestChange={handleToggle}
        open={this.state.open}
        docked={false}
        openSecondary
        width={style.drawerContainer.width}>

        <div
          style={style.drawerUserButtonHolder}>
          {/* Login Button */}
          <FlatButton
            label={'Login'}
            labelPosition={'after'}
            style={style.drawerUserButtonHolder.button}
            icon={<FontIcon className={'material-icons'}>person</FontIcon>}
          />

          {/* Register Button */}
          <FlatButton
            label={'Register'}
            style={{
              ...style.drawerUserButtonHolder.button,
              ...style.drawerUserButtonHolder.buttonLast,
            }}
          />
        </div>

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
