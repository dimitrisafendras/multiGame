import { compose } from 'containers';

import {
  userAble,
  signOutAble,
} from 'routes/root/containers';
import {
  UserButtonMobile as UserButtonMobileComp,
  UserButton as UserButtonComp,
 } from '../components';

const connectProps = compose(userAble, signOutAble);

export const UserButton = connectProps(UserButtonComp);
export const UserButtonMobile = connectProps(UserButtonMobileComp);
