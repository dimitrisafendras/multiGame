import { compose } from 'store';
import { userAble } from 'routes/root/containers';
import { Dashboard } from '../components';

export default compose(userAble)(Dashboard);
