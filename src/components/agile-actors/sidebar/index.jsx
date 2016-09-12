import React from 'react';
import { useSheet } from 'components/common/jss';
import { Signature } from 'components/agile-actors';
import {
  Drawer,
  MenuItem,
  IconButton,
  FlatButton,
  FontIcon,
} from 'material-ui';

import muiTheme from 'styles/customized-mui-theme';

const style = {
  drawerContainer: {
    width: 320,
  },
  drawerUserButtonHolder: {
    height: 36,
    padding: '12px 6px',
    background: muiTheme.palette.cyan500,
    borderBottom: '1px solid ' + muiTheme.palette.grey400,
    button: {
      color: muiTheme.palette.white,
      hoverColor: muiTheme.palette.cyan500,
      borderRight: `1px solid ${muiTheme.palette.cyan400}`,
    },
    buttonLast: {
      borderRight: 'none',
    },
  },
  closeButton: {
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: 500,
    height: 60,
    width: 60,
    padding: 6,
    background: muiTheme.palette.white,
    icon: {
      color: muiTheme.palette.primary2Color,
    },
  },
  divider: {
    borderBottom: '1px solid ' + muiTheme.palette.grey400,
  },
  menuItem: {
    padding: '10px 20px',
    color: muiTheme.palette.primary1Color,
    textTransform: 'uppercase',
    fontSize: 14,
  },
};

class Sidebar extends React.Component {
  static propTypes = {
    content: React.PropTypes.array,
    link: React.PropTypes.func,
    open: React.PropTypes.bool,
    toggleSidebar: React.PropTypes.func,
    sheet: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.open !== this.state.open) {
      this.setState({open: newProps.open});
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
        width={style.drawerContainer.width}
      >

        <div
          style={style.drawerUserButtonHolder}>
          {/* Login Button */}
          <FlatButton
            label={'Login'}
            labelPosition={'after'}
            style={{
              ...style.drawerUserButtonHolder.button,
            }}
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
          backgroundColor={muiTheme.palette.white}
          style={style.closeButton}
          className={classes.icon}
          onClick={handleToggle}
          iconStyle={{
            ...style.closeButton.icon,
          }}
          iconClassName={'material-icons'}>
          close
        </IconButton>

        <div className={classes.divider}>

          {content.filter((item) => (item.order <= 2)).map((item) => (
            <MenuItem
              innerDivStyle={{
                ...style.menuItem,
              }}
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
