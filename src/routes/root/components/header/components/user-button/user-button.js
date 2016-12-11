import React from 'react';

import {
  FontIcon,
  FlatButton,
} from 'material-ui';

import {
  classes,
  styles,
} from './style';

const className = [
  classes.headerMenuBarButton,
  classes.headerMenuBarButtonLoggedIn,
].join(' ');

type Props = {
  toggleAuthentication: () => void,
  signOut: () => void,
  user: Object,
};

const UserButtonSignedIn = ({
  toggleAuthentication,
  signOut,
  user: {
    name,
    email,
  },
}: Props) => (
  <FlatButton
    title={'Profile'}
    className={className}
    label={name || email}
    icon={
      <FontIcon
        style={styles.headerMenuBar.menuIcon}
        className={'material-icons'}
        icon>
        notifications
      </FontIcon>
    }
    onClick={() => {
      signOut();
      toggleAuthentication();
    }}
  />
);

const UserButtonSignedOut = ({
  toggleAuthentication,
  signOut,
  user,
}: Props) => (
  <FlatButton
    title={'Login / Register'}
    className={className}
    onClick={toggleAuthentication}
    label={'Login / Register'}
    icon={
      <FontIcon
        className={'material-icons'}>
        person
      </FontIcon>
    }
    hoverColor={'transparent'}
  />
);

const UserButton = (props: Props) => (
  !(props.user && props.user.email) ? <UserButtonSignedOut {...props} /> : <UserButtonSignedIn {...props} />
);

export default UserButton;
