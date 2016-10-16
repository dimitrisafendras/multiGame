import React from 'react';
import { classes } from './style';
import { content } from './content';

import {
  Content,
  Container,
  FlexContainer,
  Resizable,
  Button,
  Link,
} from 'components';

const AgileActorsPractice = ({ size }) => {

  const contentBoxes = size.mobile ? <MobileContent /> : <NormalContent />;

  return (
      <article>
        <Container
          normalContainer
          className={classes.outerContainer}>
          <Content
            normalTitle
            className={classes.outerTitle}>
            {content.title}
          </Content>

          {contentBoxes}

          <FlexContainer
            center
            className={classes.button}>
            <Button
              secondary
              containerElement={<Link to={content.buttonRoute} />} >
              {content.buttonLabel}
            </Button>
          </FlexContainer>
        </Container>
      </article>
    );
}

export default Resizable(AgileActorsPractice);
