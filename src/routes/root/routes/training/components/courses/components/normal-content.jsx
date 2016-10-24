import React, { Component } from 'react';
import content from '../content';
import classNames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import { classes, styles } from '../style';

import {
  Tabs,
  Tab,
} from 'material-ui/Tabs';

import {
  Content,
  Container,
  FlexContainer,
} from 'components';

const {
  coursesContainer,
  divider,
  sectionTitleWrapper,
  scrollableContent,
  tabWrapper,
  textWrapper,
  title,
  text,
} = classes;

const sectionsKey = (id) => `aa-courses-sections-${id}`;
const sectionKey = (id) => `aa-courses-item-${id}`;

class NormalContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  setActiveTab(tab) {
    this.setState({ activeTab: tab.props.index });
  }

  render() {
    const active = this.state.activeTab;

    return (
      <div>
        <div className={divider} />
        <FlexContainer center className={coursesContainer}>

          <Tabs inkBarStyle={styles.inkBar} tabItemContainerStyle={styles.tabs}>

            {content.sections.map((section, index) => (

              <Tab
                key={sectionsKey(section.id)}
                label={section.title}
                disableTouchRipple
                onActive={this.setActiveTab.bind(this)}
                className={classNames(
                sectionTitleWrapper,
                {
                  'active': index === active,
                  'inactive': index !== active,
                })}>

                <Container
                  container
                  className={classNames('scrollable-content', scrollableContent,  classes[section.class])}>
                  <Scrollbars
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}>
                    <div className={classNames('tab-wrapper', tabWrapper)}>

                      {section.items.map((item) => (

                        <div key={sectionKey(item.id)} className={classNames('text-wrapper', textWrapper)}>
                          <FlexContainer column>
                            <Content title className={classNames('title', title)}>
                              {item.title}
                            </Content>
                            <Content text className={text} dangerouslySetInnerHTML={{__html: item.content}}/>
                          </FlexContainer>
                        </div>

                      ))}

                    </div>
                  </Scrollbars>
                </Container>
              </Tab>

            ))}

          </Tabs>
          <div className={classes.fade}></div>
        </FlexContainer>
      </div>
    );
  }
};

export default NormalContent;
