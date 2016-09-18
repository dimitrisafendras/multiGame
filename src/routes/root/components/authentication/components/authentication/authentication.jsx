import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Collapse from 'react-collapse';
import { presets } from 'react-motion';
import { Scrollbars } from 'react-custom-scrollbars';
import classNames from 'classnames';

import { useSheet } from 'components/jss';
import { Content, FlexContainer } from 'components/content';
import LoginRegister from '../login-register';

import {
  style,
  appBarHeight,
} from './style';

const content = {
  login: 'LOGIN',
  register: 'REGISTER',
};

type Props = {
  open: boolean,
  toggleAuthentication: () => void,
  sheet: object,
  user: object,
};

class Authentication extends Component {
  props: Props;

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

  componentWillReceiveProps({ open, user }) {
    const state = {};
    state.open = !!open && !(user && user.email);
    if (!open) {
      state.scrollbar = false;
    }
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
    if (this.state.mode !== mode) {
      this.setState({ mode });
    }
  }

  checkScroll() {
    if (!this.state.open) return;
    const node = this.nodeRef; // ReactDOM.findDOMNode(this.nodeRef);
    if (!node) return;

    const currentViewHeight = window.innerHeight - appBarHeight;
    const scrollbar = currentViewHeight < node.clientHeight;

    if (scrollbar !== this.state.scrollbar) {
      this.setState({ scrollbar });
    }
  }

  render() {
    const { props } = this;
    const { classes } = props.sheet;
    const _this = this;

    return (
      <article
        ref={(node) => { this.nodeRef = node; }}
        className={classNames(classes.component, { scrollbar: this.state.scrollbar })}>
        <Collapse
          isOpened={this.state.open}
          springConfig={presets.gentle}
          onRest={() => { /* _this.checkScroll(); */ }}>
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
                  onTouchTap={() => { this.changeMode('login'); }}>
                  {content.login}
                </Content>
                <Content
                  text
                  className={classes.action}
                  onTouchTap={() => { this.changeMode('register'); }}>
                  {content.register}
                </Content>
                <FlexContainer
                  justifyContent={'flex-end'}
                  fullWidthContainer>
                  <Content
                    text
                    className={classes.close}
                    onTouchTap={() => { this.handleToggle(); }}
                    dangerouslySetInnerHTML={{ __html: '&times;' }} />
                </FlexContainer>
              </FlexContainer>
              <LoginRegister
                changeMode={(mode) => { this.changeMode(mode); }}
                mode={this.state.mode} />
            </FlexContainer>
          </Scrollbars>
        </Collapse>
      </article>
    );
  };
}

export default useSheet(Authentication, style);
