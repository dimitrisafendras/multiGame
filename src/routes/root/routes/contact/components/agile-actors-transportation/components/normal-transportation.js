import React from 'react';

import {
  Tabs,
  Tab,
} from 'material-ui/Tabs';

import {
  Content,
  FlexContainer,
} from 'components';

import { content } from '../content';

import classNames from 'classnames';

import {
  classes,
  styles as style,
} from '../style';

const {
  container,
  divider,
  title,
  subTitle,
  text,
} = classes;

class NormalTransportation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  };

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab.props.index });
  };

  render() {
    const getIcon = (index) => {
      return (this.state.activeTab === index) ? content.means[index].ImgActive : content.means[index].Img;
    };

    const getActiveClass = (index) => {
      return (this.state.activeTab === index) ? 'active' : '';
    };

    return (
      <FlexContainer center column>
        <div className={divider} />
        <Tabs className={container} inkBarStyle={style.inkBar}>
          {content.means.map((mean, index) => (
            <Tab
              key={`aa-trans-ns-${mean.id}`}
              icon={getIcon(index)}
              label={mean.title}
              className={classNames(title, getActiveClass(index))} disableTouchRipple
              onActive={this.setActiveTab}
              >
              <Content largeText className={subTitle}>
                {mean.subtitle}
              </Content>
              <Content largeText className={text}>
                {mean.content}
              </Content>
            </Tab>
          ))}
        </Tabs>
      </FlexContainer>
    );
  };
}

export default NormalTransportation;
