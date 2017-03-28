'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authUserLinkedinCallback = exports.authUserLinkedin = exports.authUserGithubCallback = exports.authUserGithub = exports.authUserGoogleCallback = exports.authUserGoogle = exports.checkAuthUser = exports.unAuthUser = exports.checkUser = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

let checkUser = exports.checkUser = (() => {
  var _ref = _asyncToGenerator(function* (ctx, next) {
    let username = ctx.params.username;

    console.log(username);

    if ((0, _lodash.indexOf)(userArray, username) === -1) {
      userArray.push(username);
      ctx.body = true;
      return;
    }
    ctx.body = false;
  });

  return function checkUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

/**
 * @api {get} /auth/unAuth UnAuthenticate/Logout user
 * @apiVersion 1.0.0
 * @apiName UnAuthUser
 * @apiGroup Auth
 */


let unAuthUser = exports.unAuthUser = (() => {
  var _ref2 = _asyncToGenerator(function* (ctx) {
    delete ctx.session.user;
    ctx.socket.emit('authUnauth', {
      user: null
    });
    ctx.req.logout();
    // ctx.redirect('/');
  });

  return function unAuthUser(_x3) {
    return _ref2.apply(this, arguments);
  };
})();

/**
 * @api {get} /auth/checkAuthUser UnAuthenticate/Logout user
 * @apiVersion 1.0.0
 * @apiName UnAuthUser
 * @apiGroup Auth
 */


let checkAuthUser = exports.checkAuthUser = (() => {
  var _ref3 = _asyncToGenerator(function* (ctx) {
    const user = ctx.session.user;

    ctx.body = {
      user
    };
  });

  return function checkAuthUser(_x4) {
    return _ref3.apply(this, arguments);
  };
})();

/**
 * @api {get} /auth/google Authenticate google user OIDC
 *
 * @apiVersion 1.0.0
 * @apiName AuthUserGoogle
 * @apiGroup Auth
 *
 * @apiExample Example usage:
 * This request should be invoked through a browser
 * at http://localhost:5000/auth/google
 *
 * @apiSuccess {StatusCode} 200  causes google openidconnect service to
 * invoke the authUserGoogleCallback of this api group
 */


let authUserGoogle = exports.authUserGoogle = (() => {
  var _ref4 = _asyncToGenerator(function* (ctx, next) {
    return _koaPassport2.default.authenticate('google-openidconnect', {
      scope: ['email']
    })(ctx, next);
  });

  return function authUserGoogle(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
})();

/**
 * @api {get} /auth/google/callback Authenticate google user OIDC
 *
 * @apiVersion 1.0.0
 * @apiName AuthUserGoogleCallback
 * @apiGroup Auth
 *
 * @apiExample Example usage:
 * This request is invoked by google openidconnect auth service only
 * at http://localhost:5000/auth/google/callback
 *
 * @apiSuccess {Object}   user      Google user object
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *    "user": {
 *      "id": "1122367896542",
 *      "displayName": "Dimitris Vilaos",
 *      "name": {
 *        "familyName": "Vilaos",
 *        "givenName": "Dimitris"
 *      },
 *      "_json": {
 *        "kind": "plus#personOpenIdConnect",
 *        "gender": "male",
 *        "sub": "1122367896542",
 *        "name": "Dimitris Vilaos",
 *        "given_name": "Dimitris",
 *        "family_name": "Vilaos",
 *        "profile": "https://plus.google.com/11287988665432136",
 *        "email": "dimitris.Vilaos@gmail.com",
 *        "email_verified": "true"
 *      }
 *    }
 * }
 */


let authUserGoogleCallback = exports.authUserGoogleCallback = (() => {
  var _ref5 = _asyncToGenerator(function* (ctx, next) {
    return _koaPassport2.default.authenticate('google-openidconnect', function (user) {
      updateCtxCloseClientWindow(ctx, user);
    })(ctx, next);
  });

  return function authUserGoogleCallback(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
})();

/**
 * @api {get} /auth/github Authenticate github user auth2
 *
 * @apiVersion 1.0.0
 * @apiName AuthUserGithub
 * @apiGroup Auth
 *
 * @apiExample Example usage:
 * This request should be invoked through a browser
 * at http://localhost:5000/auth/github
 *
 * @apiSuccess {StatusCode} 200  causes github auth2 service to
 * invoke the authUserGithubCallback of this api group
 */

/*
 * export async function authUserGithub(ctx, next) {
 *  return passport.authenticate('github', {
 *   scope: ['user:email'],
 *  })(ctx, next);
 * };
 */


/**
 * @api {get} /auth/github/callback Authenticate github user auth2
 *
 * @apiVersion 1.0.0
 * @apiName AuthUserGithubCallback
 * @apiGroup Auth
 *
 * @apiExample Example usage:
 * This request is invoked by github auth2 service only
 * at http://localhost:5000/auth/github/callback
 *
 * @apiSuccess {Object}   user       Github user object
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *    "user": {
 *    "id": "3450000",
 *    "displayName": null,
 *    "username": "dddvalos",
 *    "profileUrl": "https://github.com/dddvalos",
 *    "emails": [
 *      {
 *        "value": "dimitris.livas@gmail.com"
 *      }
 *    ],
 *    "photos": [
 *      {
 *        "value": "https://avatars.githubusercontent.com/u/XYZ000?v=3"
 *      }
 *    ],
 *    ...
 * }
 */
let authUserGithubCallback = exports.authUserGithubCallback = (() => {
  var _ref6 = _asyncToGenerator(function* (ctx, next) {
    return _koaPassport2.default.authenticate('github', function (user) {
      updateCtxCloseClientWindow(ctx, user);
    })(ctx, next);
  });

  return function authUserGithubCallback(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
})();

/**
 * @api {get} /auth/linkedin Authenticate linkedin user auth2
 *
 * @apiVersion 1.0.0
 * @apiName AuthUserGithub
 * @apiGroup Auth
 *
 * @apiExample Example usage:
 * This request should be invoked through a browser
 * at http://localhost:5000/auth/linkedin
 *
 * @apiSuccess {StatusCode} 200  causes linkedin auth2 service to
 * invoke the authUserLinkedinCallback of this api group
 */


let authUserLinkedin = exports.authUserLinkedin = (() => {
  var _ref7 = _asyncToGenerator(function* (ctx, next) {
    return _koaPassport2.default.authenticate('linkedin', {
      scope: ['email']
    })(ctx, next);
  });

  return function authUserLinkedin(_x11, _x12) {
    return _ref7.apply(this, arguments);
  };
})();

/**
 * @api {get} /auth/linkedin/callback Authenticate linkedin user auth2
 *
 * @apiVersion 1.0.0
 * @apiName AuthUserLinkedinCallback
 * @apiGroup Auth
 *
 * @apiExample Example usage:
 * This request is invoked by linkedin auth2 service only
 * at http://localhost:5000/auth/linkedin/callback
 *
 * @apiSuccess {Object}   user       Github user object
 *
 * @apiSuccessExample {json} Success-Response:
 * {
 *    "user": {
 *    "id": "3450000",
 *    "displayName": null,
 *    "username": "dddvalos",
 *    "profileUrl": "https://linkedin.com/dddvalos",
 *    "emails": [
 *      {
 *        "value": "dimitris.livas@gmail.com"
 *      }
 *    ],
 *    "photos": [
 *      {
 *        "value": "https://avatars.githubusercontent.com/u/XYZ000?v=3"
 *      }
 *    ],
 *    ...
 * }
 */


let authUserLinkedinCallback = exports.authUserLinkedinCallback = (() => {
  var _ref8 = _asyncToGenerator(function* (ctx, next) {
    return _koaPassport2.default.authenticate('linkedin', function (user) {
      updateCtxCloseClientWindow(ctx, user);
    })(ctx, next);
  });

  return function authUserLinkedinCallback(_x13, _x14) {
    return _ref8.apply(this, arguments);
  };
})();

var _koaPassport = require('koa-passport');

var _koaPassport2 = _interopRequireDefault(_koaPassport);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const updateCtx = (ctx, user, body) => {
  if (!user) {
    ctx.throw(401);
  }

  const currentLoginAttempt = user.currentLoginAttempt;

  const ctxUser = ctx.session.user;
  const numOfLoginAttempts = ctxUser && ctxUser.currentLoginAttempt && ctxUser.currentLoginAttempt.count || 0;
  currentLoginAttempt.count = numOfLoginAttempts + 1;

  ctx.session.user = _extends({}, user);

  ctx.body = _extends({}, body);
};

const updateCtxCloseClientWindow = (ctx, user) => {
  if (!user) {
    ctx.throw(401);
  }

  ctx.session.user = _extends({}, user);

  ctx.type = 'text/html; charset=utf-8';
  ctx.body = `
    <html>
      <head>
        <title>User Authentication</title>
      <head>
      <body>
        <script>
          window.close();
        </script>
      </body>
    </html>
  `;
};

/**
 * @apiDefine TokenError
 * @apiError Unauthorized Invalid JWT token
 *
 * @apiErrorExample {json} Unauthorized-Error:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "status": 401,
 *       "error": "Unauthorized"
 *     }
 */

/**
 * @api {post} /auth Authenticate user
 * @apiVersion 1.0.0
 * @apiName AuthUser
 * @apiGroup Auth
 *
 * @apiParam {String} username  User username.
 * @apiParam {String} password  User password.
 *
 * @apiExample Example usage:
 * curl -H "Content-Type: application/json" -X POST \
 *   -d '{ "username": "johndoe@gmail.com", "password": "foo" }' \
 *   localhost:5000/auth
 *
 * @apiSuccess {Object}   user           User object
 * @apiSuccess {ObjectId} user._id       User id
 * @apiSuccess {String}   user.name      User name
 * @apiSuccess {String}   user.username  User username
 * @apiSuccess {String}   token          Encoded JWT
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "user": {
 *          "_id": "56bd1da600a526986cf65c80"
 *          "username": "johndoe"
 *        },
 *       "token": "eyJhbGc.....lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ"
 *     }
 *
 * @apiError Unauthorized Incorrect credentials
 *
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "status": 401,
 *       "error": "Unauthorized"
 *     }
 */
let userArray = [];
const authUserGithub = exports.authUserGithub = _koaPassport2.default.authenticate('github', {
  scope: ['user:email']
});