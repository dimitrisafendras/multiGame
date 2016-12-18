import { compose } from 'store';

import {
  contentAble,
  linkAble,
 } from 'routes/root/containers';

import { HeaderMenuBar } from '../components';

export default compose(contentAble, linkAble)(HeaderMenuBar);
