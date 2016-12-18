import { compose } from 'store';
import { userAble } from 'routes/root/containers';

import Authentication from '../components/authentication';

export default compose(userAble)(Authentication);
