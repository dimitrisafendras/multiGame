import axios from 'axios';

const url = (params) => (
  `/recruitement/${Object.values(params).filter(param => param).join['/']}`
);

// recruitement = ({
//   service,
//   shortCode,
//   subService,
//   subShortCode,
// });

export const recruitement = (params) => (
  axios
  .get(url(params))
  .then(({ data }) => data)
);
