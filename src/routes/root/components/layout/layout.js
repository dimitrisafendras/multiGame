import React, { PropTypes, Component } from 'react';
import muiTheme from 'styles/customized-mui-theme';

import {
  Styles,
  Header,
} from '../containers';

import {
  Sidebar,
  Footer,
  Authentication,
} from './';

const style = {
  content: {
    height: '100vh',
    marginTop: muiTheme.appBar.height,
    display: 'block',
    boxSizing: 'border-box',
  },
};

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

  toggleSidebar() {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
    });
  }

  toggleAuthentication() {
    this.setState({
      authenticationOpen: !this.state.authenticationOpen,
    });
  }

  render() {
    const props = this.props;
    const { location, children, ...rest } = props;
    const _this = this;

    return (
      <Styles>
        <Header
          {...rest}
          activeRoute={location.pathname}
          handleLeftIconButtonTouchTap={function () { _this.toggleSidebar(); }}
          handleLoginRegisterTouchTap={function () { _this.toggleAuthentication(); }}
          />
        <Authentication
          toggleAuthentication={function () { _this.toggleAuthentication(); }}
          open={this.state.authenticationOpen}
          {...rest}
          />
        <Sidebar
          toggleSidebar={function () { _this.toggleSidebar(); }}
          open={this.state.sidebarOpen}
          {...rest}
          />
        <div style={style.content}>
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
