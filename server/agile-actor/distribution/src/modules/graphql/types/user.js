"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const UserTypes = exports.UserTypes = `
# Agile Actor user type
type User {
  id: String!
  name: String!
}

type Users {
  all: [User]
}`;