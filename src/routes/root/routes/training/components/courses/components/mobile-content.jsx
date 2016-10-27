import React, { Component }  from 'react';
import Dialog from 'material-ui/Dialog';
import Slider from 'react-slick';
import classNames from 'classnames';
import content from '../content';
import { Scrollbars } from 'react-custom-scrollbars';
import { classes } from '../style';

import {
  Content,
  Container,
  FlexContainer,
  SliderSettings,
  Button,
} from 'components';

const {
  sectionTitleWrapper,
  sectionTitle,
  scrollableContent,
  textWrapper,
  title,
  text,
  more,
  fade,
} = classes;

const sectionsKey = (id) => `aa-courses-sections-${id}`;
const sectionKey = (id) => `aa-courses-item-${id}`;

class MobileContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      dialogTitle: null,
      dialogText: null,
    };
  }

  handleOpen = (data, section) => {
    if (section !== 'courses') {
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
    const learnMore = <div className={more} />;
    const closeBtn = <Button secondary onTouchTap={this.handleClose} label="close"/>;
    const fading = <div className={fade}></div>;

    const dialog = <Dialog
      title={this.state.dialogTitle}
      actions={closeBtn}
      modal={false}
      open={this.state.dialogOpen}
      onRequestClose={this.handleClose}
      autoScrollBodyContent={true}
      titleStyle={{color: '#1976d2'}}>
      <div style={{paddingTop: '24px'}} dangerouslySetInnerHTML={{__html: this.state.dialogText}}/>
    </Dialog>;

    return (
      <Slider {...SliderSettings}>

        {content.sections.map((section) => (

          <div key={sectionsKey(section.id)}>
            <Container container>
              <Content title className={sectionTitleWrapper}>
                 <span className={sectionTitle}>
                   {section.title}
                 </span>
              </Content>
              <Container container className={classNames(scrollableContent, classes[section.class])}>
                <Scrollbars
                  autoHide
                  autoHideTimeout={1000}
                  autoHideDuration={200}>
                  <div className={'tab-wrapper'}>

                    {section.items.map((item) => (

                      <div key={sectionKey(item.id)} className={classNames('text-wrapper', textWrapper)}
                           onTouchTap={this.handleOpen.bind(null, item, section.class)}>
                        <FlexContainer column>
                          <Content title className={title}>
                            {item.title}
                          </Content>
                          <Content text className={text} dangerouslySetInnerHTML={{__html: item.content}}/>
                        </FlexContainer>

                        {section.class === 'courses' && learnMore}

                      </div>

                    ))}

                    {section.class === 'courses' && dialog}

                  </div>
                </Scrollbars>
              </Container>

              {section.class !== 'courses' && fading}

            </Container>
          </div>

        ))}

      </Slider>
    );
  }
};

// const loadMore =   <FlexContainer center className={button}>
//   <Button secondary onTouchTap={() => 'test'} >
//     {'load more'}
//   </Button>
// </FlexContainer>;

export default MobileContent;
