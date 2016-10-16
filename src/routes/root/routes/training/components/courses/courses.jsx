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
        <FlexContainer normalContainer
          className={classes.container}
          column>
          <Content backgroundImage
            className={classes.backgroundImage} />
          <Container
            container
            className={classes.textWrapper}>
            <Content normalTitle
              className={classes.title}>
              {content.title}
            </Content>
            <Content text
              className={classes.text}>
              {content.text}
            </Content>
          </Container>
        </FlexContainer>
      </Container>
    </article>
  );
};

ValueProposition.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(ValueProposition, style);
