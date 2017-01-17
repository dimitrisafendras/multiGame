"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const types = `
  type Contact {
    id: String!
    email: String!
    name: String
    createdAt: String
  }

  type Message {
    id: String!
    email: String!
    subject: String!
    message: String!
  }

  type MessageStatus {
    status: String!
    email: String
    subject: String
  }
`;

exports.default = types;