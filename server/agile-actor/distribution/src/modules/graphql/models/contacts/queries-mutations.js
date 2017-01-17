"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.queries = queries;
exports.mutations = mutations;