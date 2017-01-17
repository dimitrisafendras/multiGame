import config from '../../../../config';

const { clientConfig = {} } = config;

export default (io) => {
  const sessionIo = io.of('/clientConfig');

  sessionIo.on('connection', (socket, next) => {
    socket.emit('clientConfig', clientConfig);
    if (next) next();
  });
};
