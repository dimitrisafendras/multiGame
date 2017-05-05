import { simonSocket } from '../../../model-services/server-apis';

export const setOnEvent = (event, onEvent)=> {
  simonSocket.on(event, onEvent);
};

