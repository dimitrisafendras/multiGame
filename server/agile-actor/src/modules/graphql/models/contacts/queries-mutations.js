const queries = `
`;

const mutations = `
  createContactMessage(
    email: String!
    name: String!
    subject: String!
    message: String!
  ) : MessageStatus
`;

export {
  queries,
  mutations,
};
