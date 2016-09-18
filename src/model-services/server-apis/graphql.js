import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const graphql = new Lokka({
  transport: new Transport('/graphql'),
});

export default graphql;
