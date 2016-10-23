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
    defaultCenter={props.center}

  >
    {props.marker.map((marker, index) => (
      <Marker
        key={index}
        position={marker.position}
        onClick={() => props.onMarkerClick(marker)}
        icon={marker.icon}
      >
        {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)} onClick={props.handleMarkerFocus}>
            <div>{marker.infoContent}</div>
          </InfoWindow>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

class PopUpInfoWindow extends React.Component {

  state = {
    center: content.position,

    marker: [
      {
        position: content.position,
        showInfo: false,
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
    ],
  };

  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerClose = this.handleMarkerClose.bind(this);

  // Toggle to 'true' to show InfoWindow and re-renders component
  handleMarkerClick(targetMarker) {
    this.setState({
      marker: this.state.marker.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
          };
        }
        return marker;
      }),
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      marker: this.state.marker.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
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

AgileActorsMap.propTypes = {
  sheet: React.PropTypes.object,
};

export default AgileActorsMap;