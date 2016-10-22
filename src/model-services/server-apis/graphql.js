import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const originCreator = () => {
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  let port = window.location.port;
  port = port ? `:${port}` : '';
  return `${protocol}//${hostname}${port}`;
};

const origin = window.location.origin || originCreator();

const path = `${origin}/graphql`;

const transport = new Transport(path);

const graphql = new Lokka({ transport });

export default graphql;
