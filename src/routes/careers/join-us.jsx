import React from 'react';
import { useSheet } from 'components/common/jss';
import { Content, FlexContainer, Button } from 'components/common/content';

//
// Define the content of the component
//
const content = {
  title: 'Join us',
  text: 'We’re always looking for smart, motivated individuals to join us. ' +
  'If you’re looking for more than a job, go on and check our openings. ' +
  'We’d love to meet you.',
  buttonLabel: 'openings',
  buttonLink: 'https://agileactors.workable.com',
};

//
// Define the CSS styles of the components
//
const style = {
  text: {
    maxWidth: '620px',
    marginBottom: '20px',
  },
};

//
// Define the component.
//
function JoinUs({ sheet }) {
  const { classes } = sheet;
  return (
    <article>
      <FlexContainer normalContainer
        column>
        <Content normalTitle>
          {content.title}
        </Content>
        <Content normalSubTitle
          className={classes.text}>
          {content.text}
        </Content>
        <Button linkButton href={content.buttonLink} target={'_black'}>
          {content.buttonLabel}
        </Button>
      </FlexContainer>
    </article>
  );
};

JoinUs.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(JoinUs, style);
