import { compose } from 'containers';
import { userAble } from 'routes/root/containers';

import Authentication from '../components/authentication';

export default compose(userAble)(Authentication);
