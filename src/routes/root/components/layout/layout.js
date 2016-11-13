import React, { Component } from 'react';
import muiTheme from 'styles/customized-mui-theme';
import { jss } from 'components/jss';

import {
  Styles,
} from 'routes/root/containers';

import {
  Header,
  Footer,
  Sidebar,
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
  children: HTMLElement,
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
    const { location, children } = this.props;

    return (
      <Styles>
        <Header
          activeRoute={location.pathname}
          handleLeftIconButtonTouchTap={this.toggleSidebar}
          toggleAuthentication={this.toggleAuthentication} />
        /* <Authentication
          toggleAuthentication={this.toggleAuthentication}
          open={this.state.authenticationOpen} /> */
        <Sidebar
          toggleAuthentication={this.toggleAuthentication}
          toggleSidebar={this.toggleSidebar}
          open={this.state.sidebarOpen} />
        <div className={classes.content}>
          {children}
          <Footer />
        </div>
      </Styles>
    );
  }
}

export {
  Layout,
};
