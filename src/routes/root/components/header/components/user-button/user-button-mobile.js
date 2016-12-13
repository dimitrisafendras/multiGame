import React from 'react';

import {
  IconButton,
} from 'material-ui';

import { styles, classes } from './style';

const style = {
  ...styles.headerMenuBarButton,
  ...styles.headerMenuBar.button,
};

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
      style={style}
      iconStyle={styles.headerMenuBar.icon}
      onClick={toggleAuthentication}
      iconClassName={'material-icons'}>
      person
    </IconButton>
  ) : (
    <IconButton
      title={'Logout'}
      style={style}
      iconStyle={styles.headerMenuBar.icon}
      onClick={signOut}
      iconClassName={['material-icons', classes.headerMenuBarButtonUserLoggedIn].join(' ')}>
      exit_to_app
    </IconButton>
  )
);

export default UserButtonMobile;
