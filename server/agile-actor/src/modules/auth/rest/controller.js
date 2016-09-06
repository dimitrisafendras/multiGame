import passport from 'koa-passport';

const updateCtx = (ctx, user, body) => {
  if (!user) {
    ctx.throw(401);
  }

  const { currentLoginAttempt } = user;
  const ctxUser = ctx.session.user;
  currentLoginAttempt.count =
  ctxUser && ctxUser.currentLoginAttempt ? ctxUser.currentLoginAttempt.count + 1 : 1;

  ctx.session.user = {
    ...user,
  };

  ctx.body = {
    ...body,
  };
};

const updateCtxCloseClientWindow = (ctx, user) => {
  if (!user) {
    ctx.throw(401);
  }

  ctx.session.user = {
    ...user,
  };

  ctx.type = 'text/html; charset=utf-8';
  ctx.body = `
    <html>
      <head>
        <title>User Authentication</title
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
export async function authUser(ctx, next) {
  return passport.authenticate('local', (user) => {
    updateCtx(ctx, user, { user });
  })(ctx, next);
};

/**
 * @api {get} /auth/unAuth UnAuthenticate/Logout user
 * @apiVersion 1.0.0
 * @apiName UnAuthUser
 * @apiGroup Auth
 */
export async function unAuthUser(ctx) {
  delete ctx.session.user;
  ctx.socket.emit('authUnauth', {
    user: null,
  });
  ctx.req.logout();
  ctx.redirect('/');
};

/**
 * @api {get} /auth/checkAuthUser UnAuthenticate/Logout user
 * @apiVersion 1.0.0
 * @apiName UnAuthUser
 * @apiGroup Auth
 */
export async function checkAuthUser(ctx) {
  const { user } = ctx.session;
  ctx.body = {
    user,
  };
};

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
export async function authUserGoogle(ctx, next) {
  return passport.authenticate('google-openidconnect', {
    scope: ['email'],
  })(ctx, next);
};

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
export async function authUserGoogleCallback(ctx, next) {
  return passport.authenticate('google-openidconnect', (user, info, status) => {
    updateCtxCloseClientWindow(ctx, user);
  })(ctx, next);
};

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
export const authUserGithub = passport.authenticate('github', {
  scope: ['user:email'],
});

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
export async function authUserGithubCallback(ctx, next) {
  return passport.authenticate('github', (user, info, status) => {
    updateCtxCloseClientWindow(ctx, user);
  })(ctx, next);
};

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
export async function authUserLinkedin(ctx, next) {
  return passport.authenticate('linkedin', {
    scope: ['email'],
  })(ctx, next);
};

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
export async function authUserLinkedinCallback(ctx, next) {
  return passport.authenticate('linkedin', (user, info, status) => {
    updateCtxCloseClientWindow(ctx, user);
  })(ctx, next);
};
