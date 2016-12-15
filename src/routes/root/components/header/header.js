import React from 'react';

import {
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
    <FlexContainer center className={classes.logo}>
      <Logo resizable />
    </FlexContainer>
    <div className={classes.tabsContainer}>
      <HeaderMenuBar {...{ activeRoute }} />
    </div>

    <div className={classes.normalMenu}>
      {signInEnabled && (
        <UserButton {...{
          handleLeftIconButtonTouchTap,
          toggleAuthentication,
        }} />
      )}
    </div>

    <div className={classes.mobileMenu}>

      {signInEnabled && (
        <UserButtonMobile {...{
          handleLeftIconButtonTouchTap,
          toggleAuthentication,
        }} />
      )}

      <IconButton
        iconStyle={styles.menuIcon}
        onTouchTap={handleLeftIconButtonTouchTap}
        iconClassName={'material-icons'}>
        menu
      </IconButton>
    </div>
  </FlexContainer>
);

export default Header;
