import React from 'react';
import { content } from './content';
import { classes } from './style';

import {
  Content,
  Container,
  FlexContainer,
  Resizable,
  Button,
  Link
} from 'components';

import {
  NormalContent,
  MobileContent,
} from './partials';

const HelpToAchieve = ({ size }) => {

  const contentBoxes = size.mobile ? <MobileContent /> : <NormalContent />;

  return (
    <article>
      <Container
        normalContainer
        center
        column
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
};

export default Resizable(HelpToAchieve);
