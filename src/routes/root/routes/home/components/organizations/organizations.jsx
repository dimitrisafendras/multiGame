import React from 'react';
import content from './content';
import { classes } from './style';

import {
  Content,
  Container,
  FlexContainer,
  Button,
  Link,
} from 'components';

const Organizations = () => (
  <article>
    <Container
      normalContainer
      className={classes.outerContainer}>
      <Content
        normalTitle
        className={classes.outerTitle}>
        {content.title}
      </Content>
      <Content
        normalSubTitle
        className={classes.subTitle}>
        {content.subTitle}
      </Content>
      <FlexContainer
        center
        wrap>
        <FlexContainer
          center
          column
          className={classes.container}>
          <Content
            image
            className={classes.img}>
            {content.organisations[0].Img}
          </Content>
          <Content
            subTitle
            className={classes.text}>
            {content.organisations[0].content}
          </Content>
          <Button
            primary
            containerElement={<Link to={content.organisations[0].buttonRoute} />}
            className={classes.button}>
            {content.organisations[0].buttonLabel}
          </Button>
        </FlexContainer>

        <FlexContainer
          center
          column
          className={classes.innerTitleWrapper}>
          <Content
            text
            className={classes.innerTitle}>
            {content.subTitle}
          </Content>
          <div className={classes.divider} />
        </FlexContainer>

        <FlexContainer
          center
          column
          className={classes.container}>
          <Content
            image
            className={classes.img}>
            {content.organisations[1].Img}
          </Content>
          <Content
            subTitle
            className={classes.text}>
            {content.organisations[1].content}
          </Content>
          <Button
            primary
            containerElement={<Link to={content.organisations[1].buttonRoute} />}
            className={classes.button}>
            {content.organisations[1].buttonLabel}
          </Button>
        </FlexContainer>
      </FlexContainer>
    </Container>
  </article>
);

export default Organizations;
