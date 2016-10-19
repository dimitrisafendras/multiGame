import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const protocol = window.location.protocol;
const host = window.location.host;
const path = `${protocol}//${host}/graphql`;
const transport = new Transport(path);

const graphql = new Lokka({ transport });

export default graphql;
