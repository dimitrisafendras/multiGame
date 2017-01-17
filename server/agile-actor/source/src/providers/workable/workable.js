import axios from 'axios';

import config from '../../../config';

const {
  serviceUrl,
  type,
  token,
} = config.workable || {};

const headers = {
  Authorization: `${type} ${token}`,
};

const url = params => (
  serviceUrl ? [serviceUrl, ...Object.values(params)].join('/') : 'none'
);

const request = params => (
  axios
  .get(url(params), {
    headers,
  })
  .then(({ data }) => data)
  .catch(() => ({
    status: 'Workable invocation error: check config and workable availability',
  }))
);


export default request;
