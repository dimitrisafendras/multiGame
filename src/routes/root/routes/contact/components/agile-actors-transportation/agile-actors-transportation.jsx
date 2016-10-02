import React from 'react';
import { useSheet } from 'components/jss';
import { Content, FlexContainer } from 'components/content';
import { content } from './content';
import { style } from './style';


//
// Define the component.
//
function AgileActorsTransportation({ sheet }) {
  const { classes } = sheet;
  return (
    <article>
      <FlexContainer center>
        {content.means.map((mean) => (
       <FlexContainer column center key={`aa-transportation-${mean.id}`} className={classes.container}>
        <Content largeTitle className={classes.title}>
          {mean.title}
        </Content>
         <Content
           image
           className={classes.img}>
           {mean.Img}
         </Content>
        </FlexContainer>
          ))}
      </FlexContainer>
    </article>
  );
};

AgileActorsTransportation.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(AgileActorsTransportation, style);



