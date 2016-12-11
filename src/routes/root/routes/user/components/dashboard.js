import React from 'react';

import {
  Content,
  Container,
  FlexContainer,
} from 'components';

import { classes } from './style';

type Props = {
  user: {
    displayName?: string,
    email?: string,
  },
};

export const Dashboard = ({
  user: {
    displayName,
    email,
  },
}: Props) => (
  <article
    className={classes.component}>
    <Container
      container
      className={classes.contentWrapper}>
      <FlexContainer
        column
        outerContainer
        className={classes.container}>
        <Content
          largeSubTitle
          className={classes.subtitle}>
          {displayName}
        </Content>
        <Content
          largeSubTitle
          className={classes.subtitle}>
          {email}
        </Content>
      </FlexContainer>
    </Container>
  </article>
);

export default Dashboard;
