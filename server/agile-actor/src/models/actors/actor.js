import thinky from '../../utils/thinky';
import Achievement from './achievements';

const { r, type } = thinky;
const providersList = [
  'agileactors',
  'google',
  'github',
  'linkedin',
  'local',
];
const emailTypes = [
  'personal',
  'work',
  'other',
];
const phoneTypes = [
  'mobile',
  'work',
  'home',
];

const AgileActor = thinky.createModel('AgileActor', {
  type: type.string().default('AgileActor'),
  name: {
    firstName: type.string(),
    lastName: type.string(),
    middle: type.string(),
  },
  gender: type.string(),
  email: type.string().email().required().options({ enforce_type: 'strict' }),
  emailIsVerified: type.boolean(),
  authProvider: type.string().enum(...providersList),
  emails: [
    {
      type: type.string().enum(...emailTypes),
      email: type.string().email(),
      isVerified: type.boolean(),
      authProvider: type.string().enum(...providersList),
    },
  ],
  phones: [
    {
      type: type.string().enum(...phoneTypes),
      country: type.string(),
      number: type.string(),
      isVerified: type.boolean(),
    },
  ],
  displayName: type.string().default(() => (
    this.name.firstName || this.email
  )),

  createdAt: type.date().default(r.now()),

  roles: [
    {
      name: type.string(),
      from: type.date(),
      to: type.date(),
      actionTypes: [type.string()],
    },
  ],

  achievements: [Achievement],

  history: [
    {
      type: type.string().options({ enforce_type: 'strict' }), // action type
      payload: type.any(), // action payload
      at: type.date().default(r.now()), // timestamp
      stateBefore: {
        type: type.string(),
        instance: type.any(),
      },
    },
  ],
});

export default AgileActor;
