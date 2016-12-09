import {
  userAble,
  signOutAble,
} from 'routes/root/containers';
import {
  UserButtonMobile as UserButtonMobileComp,
  UserButton as UserButtonComp,
 } from '../components';

export const UserButton = userAble(signOutAble(UserButtonComp));
export const UserButtonMobile = userAble(signOutAble(UserButtonMobileComp));
