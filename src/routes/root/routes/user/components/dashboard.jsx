import React from 'react';
import {
  useSheet,
  Content,
  Container,
  FlexContainer,
} from 'components';
import { style } from './style';

type Props = {
  sheet: Object,
  user: Object,
};

export const Dashboard = ({ user, sheet }: Props) => {
  const { classes } = sheet;
  const { displayName, email } = user;

  return (
    <article
      className={classes.component}>
      <Container
        container
        className={classes.contentWrapper}>
        <FlexContainer
          column
          largeContainer
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
};

export default useSheet(Dashboard, style);
