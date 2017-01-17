import passport from 'koa-passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as GoogleStrategy } from 'passport-google-openidconnect';
import { Strategy as GitHubStrategy } from 'passport-github';
import { Strategy as LinkedinStrategy } from 'passport-linkedin-oauth2';

import config from '../../../config';
import User from '../../models/users';

import { updateUser } from './providers';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.get(id).without('password');
    done(null, user);
  } catch (err) {
    done(err);
  }
});

passport.use('local', new LocalStrategy({
  session: true,
  usernameField: 'email',
  passwordField: 'password',
},

async (email, password, done) => {
  try {
    const user = await User.get(email).run();

    if (!user) {
      return done(null, {
        currentLoginAttempt: {
          email: false,
        },
      });
    } // done(null, false)

    try {
      const isMatch = await user.validatePassword(password);
      if (!isMatch) {
        return done(null, {
          currentLoginAttempt: {
            email: true,
            password: false,
          },
        });
      }

      delete user.password;
      done(null, {
        ...user,
        currentLoginAttempt: {
          email: true,
          password: true,
        },
      });
    } catch (err) {
      done(err);
    }
  } catch (err) {
    return done(null, {
      currentLoginAttempt: {
        email: false,
      },
    }); // done(err);
  }
}
));

passport.use(new GitHubStrategy(config.auth.github,
  async (token, tokenSecret, profile, done) => (
    await updateUser('github', profile, done)
  )
));

passport.use(new GoogleStrategy(config.auth.google,
  async (iss, sub, profile, accessToken, refreshToken, done) => (
    await updateUser('google', profile, done)
  )
));

passport.use(new LinkedinStrategy(config.auth.linkedin,
  async (token, tokenSecret, profile, done) => (
    await updateUser('linkedin', profile, done)
  )
));

export default passport;
