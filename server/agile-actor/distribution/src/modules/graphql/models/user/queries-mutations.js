"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const queries = `
  me(): User
  user(email: String!): User
  users(): Users
`;

const mutations = `
  createLocalUser(
    email: String!
    password: String!
    firstName: String
    lastName: String
    displayName: String
  ): User

  deleteUser(email: String!): User
`;

exports.queries = queries;
exports.mutations = mutations;