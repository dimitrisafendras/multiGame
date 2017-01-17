import { sessionsModel } from '../../utils/thinky';

const { type } = sessionsModel;

const Session = sessionsModel.createModel('game', {
  userName: type.string()
});

Session.ensureIndex('sid');

export default Session;
