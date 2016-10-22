import React, { Component } from 'react';
import Collapse from 'react-collapse';
import { presets } from 'react-motion';
import { Scrollbars } from 'react-custom-scrollbars';
import classNames from 'classnames';

import { Content, FlexContainer } from 'components/content';
import LoginRegister from '../login-register';

import {
  classes,
  appBarHeight,
} from './style';

const content = {
  login: 'LOGIN',
  register: 'REGISTER',
};

type Props = {
  open: boolean,
  toggleAuthentication: () => void,
  user: Object,
};

class Authentication extends Component {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mode: 'login',
      autoHeightMax: window.innerHeight - appBarHeight,
    };
  }

  // Debounce window resize event for performance
  updateDimensions() {
    clearTimeout(this.resizeTimer);

    this.resizeTimer = setTimeout(() => {
      if (!this.resizeTimer) return;

      const autoHeightMax = window.innerHeight - appBarHeight;
      if (autoHeightMax !== this.state.autoHeightMax) {
        this.setState({
          autoHeightMax,
        });
      }
    }, 50);
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.updateDimensions();
    });
    this.updateDimensions();
  }

  componentWillUnmount() {
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = false;
    }
  }

  componentWillReceiveProps({ open, user }) {
    this.setState({
      open: !!open && !(user && user.email),
    });
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

  render() {
    const { autoHeightMax, open, mode } = this.state;

    return (
      <article
        ref={(ref) => { this.topNode = ref; }}
        className={classNames(classes.component)}>
        <Collapse isOpened={open} springConfig={presets.gentle}>
          <Scrollbars
            autoHeight
            autoHeightMax={autoHeightMax}
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
                  onTouchTap={() => this.changeMode('login')}>
                  {content.login}
                </Content>
                <Content
                  text
                  className={classes.action}
                  onTouchTap={() => this.changeMode('register')}>
                  {content.register}
                </Content>
                <FlexContainer
                  justifyContent={'flex-end'}
                  fullWidthContainer>
                  <Content
                    text
                    className={classes.close}
                    onTouchTap={() => this.handleToggle()}
                    dangerouslySetInnerHTML={{ __html: '&times;' }} />
                </FlexContainer>
              </FlexContainer>
              <LoginRegister
                changeMode={(mode) => this.changeMode(mode)}
                mode={mode} />
            </FlexContainer>
          </Scrollbars>
        </Collapse>
      </article>
    );
  };
}

export default Authentication;
