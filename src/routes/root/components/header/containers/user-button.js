import {
  userAble,
  onSignOutAble,
} from 'routes/root/containers';
import {
  UserButtonMobile as UserButtonMobileComp,
  UserButton as UserButtonComp,
 } from '../components';

export const UserButton = userAble(onSignOutAble(UserButtonComp));
export const UserButtonMobile = userAble(onSignOutAble(UserButtonMobileComp));
