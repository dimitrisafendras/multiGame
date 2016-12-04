//
// Define the content of the component.
//
export const content = {
  fields: [
    {
      name: 'name',
      label: 'Name',
      pattern: 'minLength:2,maxLength:100',
      error: 'Please enter a valid name',
      multiLine: false,
      rows: 1,
    },
    {
      name: 'email',
      label: 'Email',
      pattern: 'isEmail',
      error: 'Please enter a valid email',
      multiLine: false,
      rows: 1,
    },
    {
      name: 'subject',
      label: 'Subject',
      pattern: 'minLength:2,maxLength:100',
      error: 'Please write us something more',
      multiLine: false,
      rows: 1,
    },
    {
      name: 'message',
      label: 'Message',
      pattern: 'minLength:3,maxLength:400',
      error: 'Please write us something more',
      multiLine: true,
      rows: 2,
      rowsMax: 5,
    },
  ],
  button: 'send',
  successText: 'Your message was successful sent!',
  errorText: 'An error occured, please try again.',
};
