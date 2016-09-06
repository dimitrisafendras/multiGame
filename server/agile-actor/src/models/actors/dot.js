import config from '../../../config';
import thinky from '../../utils/thinky';

const Dot = thinky.createModel('Dot', {
  type: type.string().default('Dot'),
});

export default Dot;
