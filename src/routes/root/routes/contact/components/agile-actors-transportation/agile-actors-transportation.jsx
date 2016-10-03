import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
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
      <FlexContainer center normalContainer>
        <Tabs className={classes.container} inkBarStyle={style.inkBar}>
          {content.means.map((mean) => (
            <Tab icon={mean.Img} label={mean.title} key={`aa-transportation-${mean.id}`}
              className={classes.title}>
	            <Content largeText className={classes.subTitle}>
	              {mean.subtitle}
	            </Content>
	            <Content largeText className={classes.text}>
	              {mean.content}
	            </Content>
            </Tab>
          ))}
          </Tabs>
      </FlexContainer>
    </article>
  );
};

AgileActorsTransportation.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(AgileActorsTransportation, style);



