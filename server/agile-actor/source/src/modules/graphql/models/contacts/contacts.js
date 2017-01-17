import emailContact from '../../../../utils/email-contact';

const queriesImpl = {
};

const mutationsImpl = {
  createContactMessage: async (
    _,
    {
      email,
      name,
      subject,
      message,
    }
  ) => {
    try {
      await emailContact({ email, name, subject, message });
      return {
        status: 'ok',
        email,
        name,
        subject,
        message,
      };
    } catch (err) {
      return {
        status: 'error',
      };
    }
  },
};

export {
  queriesImpl,
  mutationsImpl,
};
