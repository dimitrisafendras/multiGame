'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteUser = exports.updateUser = exports.getUser = exports.getUsers = exports.createUser = undefined;

/**
 * @api {post} /users Create a new user.
 * @apiPermission
 * @apiVersion 1.0.0
 * @apiName CreateUser
 * @apiGroup Users
 *
 * @apiExample Example usage:
 * curl -H "Content-Type: application/json" -X POST \
 *   -d '{ "user": { "username": "johndoe", "password": "secretpasas" } }' \
 *   localhost:5000/users
 *
 * @apiParam {Object} user          User object (required)
 * @apiParam {String} user.username Username.
 * @apiParam {String} user.password Password.
 *
 * @apiSuccess {Object}   users           User object
 * @apiSuccess {ObjectId} users._id       User id
 * @apiSuccess {String}   users.name      User name
 * @apiSuccess {String}   users.username  User username
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "user": {
 *          "_id": "56bd1da600a526986cf65c80"
 *          "name": "John Doe"
 *          "username": "johndoe"
 *       }
 *     }
 *
 * @apiError UnprocessableEntity Missing required parameters
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 422 Unprocessable Entity
 *     {
 *       "status": 422,
 *       "error": "Unprocessable Entity"
 *     }
 */
let createUser = exports.createUser = (() => {
  var _ref = _asyncToGenerator(function* (ctx) {
    try {
      const user = new _users2.default(ctx.request.body.user);

      try {
        yield user.save();
      } catch (err) {
        ctx.throw(422, err.message);
      }

      const token = user.generateToken();
      const formatedUser = { user };
      delete formatedUser.password;

      ctx.body = {
        user: formatedUser,
        token
      };
    } catch (err) {
      ctx.throw(422, err.message);
    }
  });

  return function createUser(_x) {
    return _ref.apply(this, arguments);
  };
})();

/**
 * @api {get} /users Get all users
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName GetUsers
 * @apiGroup Users
 *
 * @apiExample Example usage:
 * curl -H "Content-Type: application/json" -X GET localhost:5000/users
 *
 * @apiSuccess {Object[]} users           Array of user objects
 * @apiSuccess {ObjectId} users._id       User id
 * @apiSuccess {String}   users.name      User name
 * @apiSuccess {String}   users.username  User username
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "users": [{
 *          "_id": "56bd1da600a526986cf65c80"
 *          "name": "John Doe"
 *          "username": "johndoe"
 *       }]
 *     }
 *
 * @apiUse TokenError
 */


let getUsers = exports.getUsers = (() => {
  var _ref2 = _asyncToGenerator(function* (ctx) {
    const users = yield _users2.default.filter({}).run();
    ctx.body = { users };
  });

  return function getUsers(_x2) {
    return _ref2.apply(this, arguments);
  };
})();

/**
 * @api {get} /users/:id Get user by id
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName GetUser
 * @apiGroup Users
 *
 * @apiExample Example usage:
 * curl -H "Content-Type: application/json" -X GET localhost:5000/users/56bd1da600a526986cf65c80
 *
 * @apiSuccess {Object}   users           User object
 * @apiSuccess {ObjectId} users._id       User id
 * @apiSuccess {String}   users.name      User name
 * @apiSuccess {String}   users.username  User username
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "user": {
 *          "_id": "56bd1da600a526986cf65c80"
 *          "name": "John Doe"
 *          "username": "johndoe"
 *       }
 *     }
 *
 * @apiUse TokenError
 */


let getUser = exports.getUser = (() => {
  var _ref3 = _asyncToGenerator(function* (ctx, next) {
    try {
      const user = yield _users2.default.get(ctx.params.id).run();
      if (!user) {
        ctx.throw(404);
      }

      delete user.password;
      ctx.body = {
        user
      };
    } catch (err) {
      ctx.throw(404);
    }

    return next && next();
  });

  return function getUser(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
})();

/**
 * @api {put} /users/:id Update a user
 * @apiPermission
 * @apiVersion 1.0.0
 * @apiName UpdateUser
 * @apiGroup Users
 *
 * @apiExample Example usage:
 * curl -H "Content-Type: application/json" \
 *   -X PUT -d '{ "user": { "name": "Cool new Name" } }' \
 *   localhost:5000/users/56bd1da600a526986cf65c80
 *
 * @apiParam {Object} user          User object (required)
 * @apiParam {String} user.name     Name.
 * @apiParam {String} user.username Username.
 *
 * @apiSuccess {Object}   users           User object
 * @apiSuccess {ObjectId} users._id       User id
 * @apiSuccess {String}   users.name      Updated name
 * @apiSuccess {String}   users.username  Updated username
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "user": {
 *          "_id": "56bd1da600a526986cf65c80"
 *          "name": "Cool new name"
 *          "username": "johndoe"
 *       }
 *     }
 *
 * @apiError UnprocessableEntity Missing required parameters
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 422 Unprocessable Entity
 *     {
 *       "status": 422,
 *       "error": "Unprocessable Entity"
 *     }
 *
 * @apiUse TokenError
 */


let updateUser = exports.updateUser = (() => {
  var _ref4 = _asyncToGenerator(function* (ctx) {
    const user = yield _users2.default.get(ctx.params.id).run();

    Object.assign(user, ctx.request.body.user);

    yield user.save();
    delete user.password;

    ctx.body = { user };
  });

  return function updateUser(_x5) {
    return _ref4.apply(this, arguments);
  };
})();

/**
 * @api {delete} /users/:id Delete a user
 * @apiPermission
 * @apiVersion 1.0.0
 * @apiName DeleteUser
 * @apiGroup Users
 *
 * @apiExample Example usage:
 * curl -H "Content-Type: application/json" -X DELETE localhost:5000/users/56bd1da600a526986cf65c80
 *
 * @apiSuccess {StatusCode} 200
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "success": true
 *     }
 *
 * @apiUse TokenError
 */


let deleteUser = exports.deleteUser = (() => {
  var _ref5 = _asyncToGenerator(function* (ctx) {
    yield _users2.default.get(ctx.params.id).delete().run();

    ctx.status = 200;
    ctx.body = {
      success: true
    };
  });

  return function deleteUser(_x6) {
    return _ref5.apply(this, arguments);
  };
})();

var _users = require('../../../models/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }