import React from 'react';

import {
  Content,
  FlexContainer,
} from 'components';

import {
  IconButton,
} from 'material-ui';

import { Logo } from 'routes/root/components';
import {
  HeaderMenuBar,
  UserButton,
  UserButtonMobile,
} from './containers';

import { classes, styles as style } from './style';

import { signInEnabled } from './config';

type Props = {
  handleLeftIconButtonTouchTap: () => void,
  toggleAuthentication: () => void,
  activeRoute: string,
};

const Header = ({
  handleLeftIconButtonTouchTap,
  toggleAuthentication,
  activeRoute,
}: Props) => (
  <FlexContainer className={classes.appBar}>
    <Content className={classes.logo}>
      <Logo resizable />
    </Content>
    <Content
      className={classes.normalMenu}
      style={{
        marginLeft: 'auto',
        minWidth: '400px',
      }}>
      <HeaderMenuBar {...{ activeRoute }} />
    </Content>

    <Content className={classes.normalMenu}>
      {signInEnabled && (
        <UserButton {...{
          handleLeftIconButtonTouchTap,
          toggleAuthentication,
        }} />
      )}
    </Content>

    <Content
      className={classes.mobileMenu}
      style={{
        position: 'fixed',
        right: '0px',
      }}>

      {signInEnabled && (
        <UserButtonMobile {...{
          handleLeftIconButtonTouchTap,
          toggleAuthentication,
        }} />
      )}

      <IconButton
        iconStyle={style.headerMenuBar.menuIcon}
        onTouchTap={handleLeftIconButtonTouchTap}
        iconClassName={'material-icons'}
        className={classes.headerMenuBarButtonMenu}>
        menu
      </IconButton>
    </Content>
  </FlexContainer>
);

export default Header;
