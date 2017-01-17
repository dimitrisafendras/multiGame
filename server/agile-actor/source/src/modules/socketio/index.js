import glob from 'glob';
import http from 'http';
import IO from 'socket.io';

export default (app) => {
  const server = http.createServer(app.callback());
  const io = new IO(server);

  glob(`${__dirname}/*/`, (err, matches) => {
    if (err) throw err;
    matches.forEach(mod => require(mod).default(io));
  });

  return server;
};
