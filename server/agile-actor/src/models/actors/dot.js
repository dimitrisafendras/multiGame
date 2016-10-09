import config from '../../../config';
import { models } from '../../utils/thinky';

const { type } = models;

const Dot = models.createModel('Dot', {
  type: type.string().default('Dot'),
});

export default Dot;
