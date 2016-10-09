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
    return {
      status: 'ok',
      email,
      name,
      subject,
      message,
    };
  },
};

export {
  queriesImpl,
  mutationsImpl,
};
