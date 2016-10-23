import React from 'react';
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps/lib';

import { FlexContainer, Container, Content } from 'components';
import { classes } from './style';
import { content } from './content';


const PopUpInfoWindowGoogleMap = withGoogleMap(props => (
    <GoogleMap
      defaultZoom={16}
      center={props.center}
      draggable={false}
      scrollwheel={false}
    >
      <Marker
        position={props.marker.position}
        onClick={props.onMarkerClick}
        icon={props.marker.icon}>
        {props.showInfo && (
          <InfoWindow onCloseClick={props.onMarkerClose}>
            <div>{props.marker.infoContent}</div>
          </InfoWindow>
        )}
      </Marker>
    </GoogleMap>
  )
);


class PopUpInfoWindow extends React.Component {

  state = {
    center: content.position,
    showInfo: false,

    marker:
    {
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
    return (
      <PopUpInfoWindowGoogleMap
        containerElement={
          <div style={{ height: `100%`,width: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%`,width: `100%` }} />
        }
        center={this.state.center}
        marker={this.state.marker}
        showInfo={this.state.showInfo}
        onMarkerClick={this.handleMarkerClick}
        onMarkerClose={this.handleMarkerClose}
      />
    );
  }
}

const AgileActorsMap = () => (
  <FlexContainer largeContainer
   className={classes.container}>
    <PopUpInfoWindow />
  </FlexContainer>
);

export default AgileActorsMap;