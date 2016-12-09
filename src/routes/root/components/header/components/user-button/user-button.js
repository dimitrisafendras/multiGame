import React from 'react';

import {
  FontIcon,
  FlatButton,
} from 'material-ui';

import { classes, styles as style } from './style';

type Props = {
  toggleAuthentication: () => void,
  signOut: () => void,
  user: Object,
};

const UserButtonSignedIn = ({
  toggleAuthentication,
  signOut,
  user,
}: Props) => (
  <div>
    <FlatButton
      title={'Profile'}
      className={[
        classes.headerMenuBarButton,
        classes.headerMenuBarButtonLogin,
        classes.headerMenuBarButtonLoggedIn,
      ].join(' ')}
      style={style.headerMenuBar.button}
      label={`Welcome,  ${(user.name) ? user.name : user.email}`}
      icon={
        <FontIcon
          style={style.headerMenuBar.menuIcon}
          className={'material-icons'}
          icon>
          notifications
        </FontIcon>
      }
    />
    <FlatButton
      title={'Logout'}
      className={[
        classes.headerMenuBarButton,
        classes.headerMenuBarButtonLogout,
      ].join(' ')}
      style={style.headerMenuBar.button}
      onClick={() => {
        signOut();
        toggleAuthentication();
      }}
      label={`logout`}
    />
  </div>
);

const UserButtonSignedOut = ({
  toggleAuthentication,
  signOut,
  user,
}: Props) => (
  <FlatButton
    title={'Login / Register'}
    className={[
      classes.headerMenuBarButton,
      classes.headerMenuBarButtonLogin,
    ].join(' ')}
    style={style.headerMenuBar.button}
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
