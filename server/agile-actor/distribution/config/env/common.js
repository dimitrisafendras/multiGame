'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  graphiql: process.env.GRAPHIQL,
  port: process.env.PORT || 5000,
  sapRoutes: ['/Careers', '/Organizations', '/About', '/Contact', '/User', '/Training']
};