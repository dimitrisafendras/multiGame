import React from 'react';

import {
  IconButton,
} from 'material-ui';

import { useSheet } from 'components/jss';
import { style } from './style';

type Props = {
  handleLoginRegisterTouchTap: () => void,
  onSignOut: () => void,
  sheet: Object,
  user: Object,
};

const UserButtonMobile = ({
  handleLoginRegisterTouchTap,
  onSignOut,
  sheet: { classes },
  user,
} : Props) => (
  !(user && user.email) ? (
    <IconButton
      title={'Login / Register'}
      className={classes.headerMenuBarButton}
      style={style.headerMenuBar.button}
      iconStyle={style.headerMenuBar.icon}
      onClick={handleLoginRegisterTouchTap}
      iconClassName={'material-icons'}>
      person
    </IconButton>
  ) : (
    <IconButton
      title={'Logout'}
      className={classes.headerMenuBarButton}
      style={style.headerMenuBar.button}
      iconStyle={style.headerMenuBar.icon}
      onClick={onSignOut}
      iconClassName={['material-icons', classes.headerMenuBarButtonUserLoggedIn].join(' ')}
    >
      exit_to_app
    </IconButton>
  )
);

export default useSheet(UserButtonMobile, style);
