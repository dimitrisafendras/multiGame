import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import muiTheme from 'styles/customized-mui-theme';
import Collapse from 'react-collapse';
import { presets } from 'react-motion';
import { Scrollbars } from 'react-custom-scrollbars';
import classNames from 'classnames';

import { useSheet } from 'components/jss';
import { Content, FlexContainer } from 'components/content';
import LoginRegister from './components/login-register';

const content = {
  login: 'LOGIN',
  register: 'REGISTER',
};

//
// Define the CSS styles of the components
//
const style = {
  component: {
    position: 'fixed',
    width: '100%',
    zIndex: '99999',
    backgroundColor: muiTheme.palette.blue700,

    '&.scrollbar': {
      top: muiTheme.appBar.height,
      bottom: '0px',
      overflowY: 'scroll',
      overflowX: 'hidden',
    },
  },
  container: {
    overflow: 'scroll',
    paddingTop: '30px',
    paddingBottom: 'calc(30px + 2%)',
    paddingLeft: '9.4%',
    paddingRight: '9.4%',
    boxSizing: 'border-box',
    maxWidth: muiTheme.appBar.maxWidth,
  },
  actionsWrapper: {
    color: muiTheme.palette.white,
    marginBottom: '20px',
  },
  action: {
    cursor: 'pointer',
    marginRight: '30px',
  },
  close: {
    cursor: 'pointer',
    fontSize: '30px',
  },
  '@media (min-width: 1600px)': {
    component: {
      display: 'flex',
      justifyContent: 'center',
    },
  },
  '@media (max-width: 1100px)': {
    container: {
      paddingLeft: 'calc(1.5% + 15px) !important',
      paddingRight: 'calc(1.5% + 15px) !important',
    },
  },
};

//
// Define the component
//
class Authentication extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    mode: PropTypes.string,
    toggleAuthentication: PropTypes.func,
    changeMode: PropTypes.func,
    sheet: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mode: 'login',
      scrollbar: false,
    };
  }

  // Debounce window resize event for performance
  updateDimensions() {
    clearTimeout(this.resizeTimer);

    this.resizeTimer = setTimeout(() => (
      this.resizeTimer && this.checkScroll()
    ), 50);
  }

  componentDidMount() {
    window.addEventListener('resize', () => { this.updateDimensions(); });
    this.updateDimensions();
  }

  componentWillUnmount() {
    this.resizeTimer && clearTimeout(this.resizeTimer);
    this.resizeTimer = false;
  }

  componentWillReceiveProps({ open }) {
    const state = {};
    open || (state.scrollbar = false);
    open !== this.state.open && (state.open = open);
    this.setState(state);
  }

  handleToggle() {
    const { toggleAuthentication } = this.props;
    if (toggleAuthentication) {
      toggleAuthentication();
      return;
    }
    this.setState({ open: !this.state.open });
  }

  changeMode(mode) {
    this.state.mode !== mode && this.setState({ mode });
  }

  checkScroll() {
    let node;
    if (!this.state.open || !(node = ReactDOM.findDOMNode(this.refs.authentication))) {
      return;
    }

    const { clientHeight } = node;
    const scrollbar = clientHeight > (window.innerHeight - parseInt(muiTheme.appBar.height));
    if (scrollbar !== this.state.scrollbar) this.setState({ scrollbar });
  }

  render() {
    const { props } = this;
    const { classes } = props.sheet;
    const _this = this;

    return (
      <article
        ref={'authentication'}
        className={classNames(classes.component, { 'scrollbar': this.state.scrollbar })}>
        <Collapse
          isOpened={this.state.open}
          springConfig={presets.gentle}
          onRest={function () { /* _this.checkScroll(); */ }}>
          <Scrollbars
            autoHeight
            autoHeightMax={700}
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}>
            <FlexContainer
              fullWidthContainer
              className={classes.container}
              column>
              <FlexContainer
                fullWidthContainer
                className={classes.actionsWrapper}>
                <Content
                  text
                  className={classes.action}
                  onTouchTap={function () { _this.changeMode('login'); }}>
                  {content.login}
                </Content>
                <Content
                  text
                  className={classes.action}
                  onTouchTap={function () { _this.changeMode('register'); }}>
                  {content.register}
                </Content>
                <FlexContainer
                  justifyContent={'flex-end'}
                  fullWidthContainer>
                  <Content
                    text
                    className={classes.close}
                    onTouchTap={function () { _this.handleToggle(); }}
                    dangerouslySetInnerHTML={{ __html: '&times;' }} />
                </FlexContainer>
              </FlexContainer>
              <LoginRegister
                changeMode={function () { _this.changeMode(); }}
                mode={this.state.mode} />
            </FlexContainer>
          </Scrollbars>
        </Collapse>
      </article>
    );
  };
}

export default useSheet(Authentication, style);
