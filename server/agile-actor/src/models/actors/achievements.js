import thinky, { type } from '../../utils/thinky';

const Achievement = thinky.createModel('Achievement', {
  type: type.string().default('Achievement'),
});

export default Achievement;
