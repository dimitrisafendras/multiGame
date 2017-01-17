'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _thinky = require('../../utils/thinky');

const type = _thinky.sessionsModel.type;


const Session = _thinky.sessionsModel.createModel('game', {
  userName: type.string()
});

Session.ensureIndex('sid');

exports.default = Session;