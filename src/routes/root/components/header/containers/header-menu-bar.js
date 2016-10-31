import { compose } from 'containers';

import {
  contentAble,
  linkAble,
 } from 'routes/root/containers';

import { HeaderMenuBar } from '../components';

export default compose(contentAble, linkAble)(HeaderMenuBar);
