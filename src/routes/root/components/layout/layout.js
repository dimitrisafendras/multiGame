import React, { PropTypes, Component } from 'react';
import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components/jss';

import {
  Styles,
  Sidebar,
} from 'routes/root/containers';

import {
  Header,
  Footer,
  Authentication,
} from 'routes/root/components';

const style = {
  content: {
    height: '100vh',
    marginTop: `${muiTheme.appBar.mobileHeight}px`,
    display: 'block',
    boxSizing: 'border-box',
  },
  '@media (min-width: 768px)': {
    content: {
      marginTop: `${muiTheme.appBar.tabletHeight}px`,
    },
  },
};

const { classes } = jss.createStyleSheet(style).attach();

type Props = {
  children: PropTypes.element,
  location: Object,
}

class Layout extends Component {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      authenticationOpen: false,
    };
  }

  componentWillReceiveProps() {
    if (this.scrollbar) {
      this.scrollbar.scrollToTop();
    }
  }

  toggleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    });
  };

  toggleAuthentication = () => {
    this.setState({
      authenticationOpen: !this.state.authenticationOpen,
    });
  };

  render() {
    const props = this.props;
    const { location, children, ...rest } = props;

    return (
      <Styles>
        <Header
          {...rest}
          activeRoute={location.pathname}
          handleLeftIconButtonTouchTap={this.toggleSidebar}
          handleLoginRegisterTouchTap={this.toggleAuthentication}
          />
        <Authentication
          toggleAuthentication={this.toggleAuthentication}
          open={this.state.authenticationOpen}
          {...rest}
          />
        <Sidebar
          handleLoginRegisterTouchTap={this.toggleAuthentication}
          toggleSidebar={this.toggleSidebar}
          open={this.state.sidebarOpen}
          {...rest}
          />
        <div className={classes.content}>
          {children}
          <Footer {...rest} />
        </div>
      </Styles>
    );
  }
}

export {
  Layout,
};
