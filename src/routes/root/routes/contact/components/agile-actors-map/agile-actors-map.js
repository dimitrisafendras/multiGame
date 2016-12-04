import React, {Component} from 'react';

import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps/lib';

import InfoBox from 'react-google-maps/lib/addons/InfoBox';

import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

import GoogleMapsKey from './config';

import {
  FlexContainer,
  Container,
  Content,
} from 'components';

import { classes, styles } from './style';
import { content } from './content';

const {
  container,
  textWrapper,
  title,
  text,
  } = classes;

const InfoBoxGoogleMap = withScriptjs(
  withGoogleMap(({
    center,
    marker: {
      position,
      icon,
    },
    showInfo,
    onMarkerClick,
    onClickFromChildrenOfInfoBox,
  }) => (
    <GoogleMap defaultZoom={16} center={center} options={{scrollwheel: false}}>
      <Marker
        position={position}
        onClick={onMarkerClick}
        icon={icon} >
        {showInfo && (
          <InfoBox
            options={{ closeBoxURL: ``, enableEventPropagation: true }}>
            <Container className={textWrapper} onClick={onClickFromChildrenOfInfoBox}>
              <Content title className={title}>
                {content.title}
              </Content>
              <Content text className={text}>
                {content.text}
              </Content>
            </Container>
          </InfoBox>
        )}
      </Marker>
    </GoogleMap>
  ))
);

class AgileActorsMap extends Component {
  state = {
    center: content.position,
    showInfo: false,

    marker: {
      position: content.position,
      title: content.title,
      icon: content.icon,
    },
  };

  toggleInfoBox = this.toggleInfoBox.bind(this);
  goToGoogleMaps = this.goToGoogleMaps.bind(this);

  toggleInfoBox() {
    this.setState({
      ...this.state,
      showInfo: !this.state.showInfo,
    });
  }
  goToGoogleMaps() {
    window.open(content.url);
  }

  render() {
    const node = <div style={styles.mapElement} />;
    return (
      <FlexContainer largeContainer className={container}>

        <InfoBoxGoogleMap
          containerElement={node}
          mapElement={node}
          loadingElement={node}
          googleMapURL={`https://maps.googleapis.com/maps/api/js${GoogleMapsKey}`}
          center={this.state.center}
          marker={this.state.marker}
          showInfo={this.state.showInfo}
          onMarkerClick={this.toggleInfoBox}
          onClickFromChildrenOfInfoBox={this.goToGoogleMaps}
        />
      </FlexContainer>
    );
  }
}

export default AgileActorsMap;
