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

import { classes } from './style';
import { content } from './content';

const PopUpInfoWindowGoogleMap = withScriptjs(
  withGoogleMap(({
    center,
    marker: {
      position,
      icon,
    },
    onMarkerClick,
    onClickFromChildrenOfInfoBox,
  }) => (
    <GoogleMap
      defaultZoom={16}
      center={center}
      draggable={false}
      scrollwheel={false}
      zoomable={false}
      navigationControl={false}
      mapTypeControl={false}
      scaleControl={false}
      >
      <Marker
        position={position}
        onClick={onMarkerClick}
        icon={icon} />
      <InfoBox
        defaultPosition={new google.maps.LatLng(content.infoBox.lat, content.infoBox.lng)}
        options={{ closeBoxURL: ``, enableEventPropagation: true }}>
        <Container className={classes.textWrapper} onClick={onClickFromChildrenOfInfoBox}>
          <Content title className={classes.title}>
            {content.title}
          </Content>
          <Content text className={classes.text}>
            {content.text}
          </Content>
        </Container>
      </InfoBox>
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

  handleMarkerClick = this.handleMarkerClick.bind(this);

  handleMarkerClick() {
    window.open(content.url);
  }
  render() {
    const node = <div style={{ height: `100%`, width: `100%` }} />;
    return (
      <FlexContainer largeContainer className={classes.container}>
        <PopUpInfoWindowGoogleMap
          containerElement={node}
          mapElement={node}
          loadingElement={node}
          googleMapURL={`https://maps.googleapis.com/maps/api/js${GoogleMapsKey}`}
          center={this.state.center}
          marker={this.state.marker}
          onMarkerClick={this.handleMarkerClick}
          onClickFromChildrenOfInfoBox={this.handleMarkerClick}
        />
      </FlexContainer>
    );
  }
}

export default AgileActorsMap;

