import { graphql } from 'model-services/server-apis';

/*
 * ContactUs graphql mutation invocation
 */
export const createContactMessage = ({
  email,
  name,
  subject,
  message,
}) => {
  return (
    graphql
    .mutate(`{
      createContactMessage(
        email: "${email}"
        name: "${name}"
        subject: "${subject}"
        message: "${message}"
      ) {
        status
      }
    }`)
  );
};
