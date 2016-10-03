import { sessionsModel } from '../../utils/thinky';

const { type } = sessionsModel;

const Session = sessionsModel.createModel('sessions', {
  type: type.string().default('Session'),
  id: type.string().options({ enforce_type: 'strict' }),
  sid: type.string().options({ enforce_type: 'strict' }),
  user: type.object(),
  cookie: type.object(),
});

Session.ensureIndex('sid');

export default Session;
