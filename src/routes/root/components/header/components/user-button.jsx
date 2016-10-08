import React from 'react';

import {
  FontIcon,
  FlatButton,
} from 'material-ui';

import { useSheet } from 'components/jss';
import { style } from './style';

type Props = {
  toggleAuthentication: () => void,
  onSignOut: () => void,
  user: Object,
  sheet: Object,
};

const UserButton = ({
  toggleAuthentication,
  onSignOut,
  user,
  sheet: { classes },
}: Props) => (
  !(user && user.email) ? (
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
  ) : (
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
          onSignOut();
          toggleAuthentication();
        }}
        label={`logout`}
      />
    </div>
));

export default useSheet(UserButton, style);
