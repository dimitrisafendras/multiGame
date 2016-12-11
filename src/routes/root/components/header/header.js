import React from 'react';

import {
  Container,
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

import { classes, styles } from './style';

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
    <Container className={classes.logo}>
      <Logo resizable />
    </Container>
    <Container
      className={classes.normalMenu}
      style={{
        marginLeft: 'auto',
        minWidth: '400px',
      }}>
      <HeaderMenuBar {...{ activeRoute }} />
    </Container>

    <Container className={classes.normalMenu}>
      {signInEnabled && (
        <UserButton {...{
          handleLeftIconButtonTouchTap,
          toggleAuthentication,
        }} />
      )}
    </Container>

    <Container className={classes.mobileMenu}>

      {signInEnabled && (
        <UserButtonMobile {...{
          handleLeftIconButtonTouchTap,
          toggleAuthentication,
        }} />
      )}

      <IconButton
        iconStyle={styles.headerMenuBar.menuIcon}
        onTouchTap={handleLeftIconButtonTouchTap}
        iconClassName={'material-icons'}
        className={classes.headerMenuBarButtonMenu}>
        menu
      </IconButton>
    </Container>
  </FlexContainer>
);

export default Header;
