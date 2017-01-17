'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _providers = require('../../../providers');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * @api {get} /recruitement? Get recruitement data.
 */
exports.default = (() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    const user = ctx.session.user,
          params = ctx.params;

    ctx.body = user && user.email ? {
      recruitement: yield (0, _providers.recruitement)(params || {})
    } : {
      status: 'Unauthorized user request'
    };

    if (next) next();
  });

  function get(_x, _x2) {
    return _ref.apply(this, arguments);
  }

  return get;
})();