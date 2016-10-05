const content = {
  fields: [
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      pattern: 'isEmail',
      error: 'Please enter a valid email',
      common: true,
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      pattern: 'minLength:6',
      error: 'Your password must be at least 6 characters',
      common: true,
    },
    {
      name: 'passwordConfirm',
      label: 'Confirm Password',
      type: 'password',
      pattern: 'equalsField:password',
      error: 'These passwords don\'t match',
      common: false,
    },
  ],
};

export {
  content,
};

export default content;
