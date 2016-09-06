import config from '../../../config';
import thinky from '../../utils/thinky';

const Achievement = thinky.createModel('Achievement', {
  type: type.string().default('Achievement'),
});

export default Achievement;
