import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import content from '../content';
import classNames from 'classnames';

import { Scrollbars } from    'react-custom-scrollbars';
import { classes, styles } from '../style';

import {
  Tabs,
  Tab,
  IconButton,
} from 'material-ui';

import {
  Content,
  Container,
  FlexContainer,
  Button,
} from 'components';

const {
  coursesContainer,
  divider,
  sectionTitleWrapper,
  scrollableContent,
  tabWrapper,
  textWrapper,
  dialog,
  text,
  fade,
  more,
} = classes;

const sectionsKey = (id) => `aa-courses-sections-${id}`;
const sectionKey = (id) => `aa-courses-item-${id}`;

class NormalContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      dialogOpen: false,
      dialogTitle: null,
      dialogText: null,
    };
  }

  setActiveTab = (tab) => {
    this.setState({ activeTab: tab.props.index });
  };

  handleOpen = (data, tab) => {
    if (tab !== 'courses') {
      return;
    }

    this.setState({
      dialogOpen: true,
      dialogTitle: data.title,
      dialogText: data.content,
    });
  };

  handleClose = () => {
    this.setState({dialogOpen: false});
  };

  render() {
    const active = this.state.activeTab;
    const learnMore = <div className={more} />;
    const closeBtn = <Button secondary onTouchTap={this.handleClose} label={'close'} />;
    const fading = <div className={fade} />;
    const title = false ? (
      <FlexContainer container justifyContent={'space-between'}>
        <div>{this.state.dialogTitle}</div>
        <IconButton touch onClick={this.handleClose} iconClassName={'material-icons'}>
          close
        </IconButton>
      </FlexContainer>
    ) : this.state.dialogTitle;

    const dialog = (
      <Dialog
        title={title}
        actions={closeBtn}
        modal={false}
        open={this.state.dialogOpen}
        onRequestClose={this.handleClose}
        autoScrollBodyContent
        titleStyle={{color: '#1976d2'}} >
        <Scrollbars
          autoHeight
          autoHide
          autoHeightMax={500}
          autoHideTimeout={1000}
          autoHideDuration={200}>
          <div className={classes.dialog} dangerouslySetInnerHTML={{__html: this.state.dialogText}} />
        </Scrollbars>
      </Dialog>
    );

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
                onActive={this.setActiveTab}
                className={classNames(
                     sectionTitleWrapper,
                  {
                    active: index === active,
                    inactive: index !== active,
                  })}>

                <Container
                  container
                  className={classNames('scrollable-content', scrollableContent, classes[section.class])}>
                  <Scrollbars
                    autoHide
                    autoHideTimeout={1000}
                    autoHideDuration={200}>
                    <div className={classNames('tab-wrapper', tabWrapper)}>

                      {section.items.map((item) => (

                        <div key={sectionKey(item.id)} className={classNames('text-wrapper', textWrapper)}
                          onTouchTap={() => this.handleOpen(item, section.class)}>
                          <FlexContainer column>
                            <Content title className={classNames('title', title)}>
                              {item.title}
                            </Content>
                            <Content text className={text} dangerouslySetInnerHTML={{__html: item.content}} />
                          </FlexContainer>

                          {section.class === 'courses' && learnMore}

                        </div>

                      ))}

                      {section.class === 'courses' && dialog}

                    </div>
                  </Scrollbars>

                  {section.class !== 'courses' && fading}

                </Container>
              </Tab>

            ))};

          </Tabs>
        </FlexContainer>
      </div>
    );
  };
};

// TODO: add the load more button
// {section.class === 'courses' && loadMore}
//
// const loadMore =   <FlexContainer center className={button}>
//   <Button secondary onTouchTap={() => 'test'} >
//     {'load more'}
//   </Button>
// </FlexContainer>;

export default NormalContent;
