import { chessSocket } from '../../../model-services/server-apis';

export const setOnEvent = (event, onEvent)=> {
  chessSocket.on(event, onEvent);
};

