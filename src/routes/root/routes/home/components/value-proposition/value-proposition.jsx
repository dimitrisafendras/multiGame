import React from 'react';
import { style } from './style';
import { content } from './content';
import {
  useSheet,
  Content,
  FlexContainer,
  Container,
  Button,
  Link
} from 'components';

//
// The component
//
const ValueProposition = ({ sheet }) => {
  const { classes } = sheet;

  return (
    <article
      className={classes.component}>
      <Container
        container
        className={classes.contentWrapper}>
        <FlexContainer largeContainer
          className={classes.container}
          column>
          <Content backgroundImage
            className={classes.backgroundImage} />
          <Content largeTitle
            className={classes.title}>
            {content.title}
          </Content>
          <Content largeSubTitle
            className={classes.subtitle}>
            {content.subTitle}
          </Content>
          <Content largeText
            className={classes.text}>
            {content.text}
          </Content>
          <Button
            secondary
            className={classes.button}
            containerElement={<Link to={content.buttonRoute} />}>
            {content.buttonLabel}
          </Button>
        </FlexContainer>
      </Container>
    </article>
  );
};

ValueProposition.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(ValueProposition, style);
