import React from 'react';

import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
} from 'react-google-maps/lib';

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
      infoContent,
    },
    showInfo,
    onMarkerClick,
    onMarkerClose,
  }) => (
    <GoogleMap
      defaultZoom={16}
      center={center}
      draggable={false}
      scrollwheel={false}
      >
      <Marker
        position={position}
        onClick={onMarkerClick}
        icon={icon}>
        {showInfo && (
          <InfoWindow onCloseClick={onMarkerClose}>
            <div>{infoContent}</div>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  ))
);

class PopUpInfoWindow extends React.Component {
  state = {
    center: content.position,
    showInfo: false,

    marker: {
      position: content.position,
      title: content.title,
      icon: content.icon,
      infoContent: (
        <Container className={classes.textWrapper}>
          <a target='_blank' href={content.url} className={classes.link}>
            <Content title className={classes.title}>
              {content.title}
            </Content>
            <Content text className={classes.text}>
              {content.text}
            </Content>
          </a>
        </Container>
      ),
    },
  };

  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerClose = this.handleMarkerClose.bind(this);

  // Toggle to 'true' to show InfoWindow and re-renders component
  handleMarkerClick() {
    this.setState({
      ...this.state,
      showInfo: true,
    });
  }

  handleMarkerClose() {
    this.setState({
      ...this.state,
      showInfo: false,
    });
  }

  render() {
    const node = <div style={{ height: `100%`, width: `100%` }} />;

    return (
      <PopUpInfoWindowGoogleMap
        containerElement={node}
        mapElement={node}
        loadingElement={node}
        googleMapURL={`https://maps.googleapis.com/maps/api/js${GoogleMapsKey}`}
        center={this.state.center}
        marker={this.state.marker}
        showInfo={this.state.showInfo}
        onMarkerClick={this.handleMarkerClick}
        onMarkerClose={this.handleMarkerClose} />
    );
  }
}

const AgileActorsMap = () => (
  <FlexContainer largeContainer className={classes.container}>
    <PopUpInfoWindow />
  </FlexContainer>
);

export default AgileActorsMap;
