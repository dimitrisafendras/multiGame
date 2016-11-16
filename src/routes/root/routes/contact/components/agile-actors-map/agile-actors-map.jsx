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
    <GoogleMap defaultZoom={16} center={center}>
      <Marker
        position={position}
        onClick={onMarkerClick}
        icon={icon} />
      {showInfo && (
      <InfoBox
        defaultPosition={new google.maps.LatLng(center.lat, center.lng)}
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
     )}
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
      <FlexContainer largeContainer className={classes.container}>
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
