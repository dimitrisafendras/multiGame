import React from 'react';

import {
  IconButton,
} from 'material-ui';

import { styles as style, classes } from './style';

type Props = {
  toggleAuthentication: () => void,
  signOut: () => void,
  user: Object,
};

const UserButtonMobile = ({
  toggleAuthentication,
  signOut,
  user,
} : Props) => (
  !(user && user.email) ? (
    <IconButton
      title={'Login / Register'}
      className={classes.headerMenuBarButton}
      style={style.headerMenuBar.button}
      iconStyle={style.headerMenuBar.icon}
      onClick={toggleAuthentication}
      iconClassName={'material-icons'}>
      person
    </IconButton>
  ) : (
    <IconButton
      title={'Logout'}
      className={classes.headerMenuBarButton}
      style={style.headerMenuBar.button}
      iconStyle={style.headerMenuBar.icon}
      onClick={signOut}
      iconClassName={['material-icons', classes.headerMenuBarButtonUserLoggedIn].join(' ')}>
      exit_to_app
    </IconButton>
  )
);

export default UserButtonMobile;
