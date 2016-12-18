import React from 'react';

import {
  compose,
} from 'store';

import {
  userSigninEnabledAble,
} from 'routes/root/containers';

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

import {
  classes,
  styles,
} from './style';

type Props = {
  userSigninEnabled: boolean,
  handleLeftIconButtonTouchTap: () => void,
  toggleAuthentication: () => void,
  activeRoute: string,
};

const Header = ({
  userSigninEnabled,
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
      {userSigninEnabled && (
        <UserButton {...{
          handleLeftIconButtonTouchTap,
          toggleAuthentication,
        }} />
      )}
    </div>

    <div className={classes.mobileMenu}>

      {userSigninEnabled && (
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

export default compose(userSigninEnabledAble)(Header);
