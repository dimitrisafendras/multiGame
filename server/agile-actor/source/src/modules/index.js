import rest from './rest';
import socketio from './socketio';

export default app => socketio(rest(app));
