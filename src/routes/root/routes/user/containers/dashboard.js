import { compose } from 'containers';
import { userAble } from 'routes/root/containers';
import { Dashboard } from '../components';

export default compose(userAble)(Dashboard);
