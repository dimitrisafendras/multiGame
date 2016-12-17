import { graphql } from 'model-services/server-apis';

export const createLocalUser = ({
  email,
  password,
  firstName,
  lastName,
  displayName,
}) => {
  const userData = `
    ${(firstName && `firstName: "${firstName}"`) || ''}
    ${(lastName && `lastName: "${lastName}"`) || ''}
    ${(displayName && `displayName: "${displayName}"`) || ''}
  `;

  return (
    graphql
    .mutate(`{
      user: createLocalUser(
        email: "${email}"
        password: "${password}"
        ${userData}
      ) {
        email
        firstName
        lastName
        displayName
      }
    }`)
    .then(data => data.user) // .then(onSuccess).catch(onError);
  );
};
