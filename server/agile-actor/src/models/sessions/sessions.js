import { sessionsModel } from '../../utils/thinky';

const { type } = sessionsModel;

const Session = sessionsModel.createModel('sessions', {
  id: type.string(),
  sid: type.string(),
  user: type.object(),
  cookie: type.object(),
});

Session.ensureIndex('sid');

export default Session;
