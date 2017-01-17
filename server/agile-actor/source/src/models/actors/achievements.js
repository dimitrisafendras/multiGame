import { models } from '../../utils/thinky';

const { type } = models;

const Achievement = models.createModel('Achievement', {
  type: type.string().default('Achievement'),
});

export default Achievement;
