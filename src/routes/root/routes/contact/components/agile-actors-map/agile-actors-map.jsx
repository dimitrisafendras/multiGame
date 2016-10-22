import React from 'react';
import { withGoogleMap, GoogleMap, InfoWindow, Marker } from 'react-google-maps/lib';

import { useSheet, FlexContainer, Content } from 'components';
import { style } from './style';
import { content } from './content';


const PopUpInfoWindowGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={16}
    center={props.center}
    draggable={false}
    defaultCenter={this.state.center}

  >
    {props.markers.map((marker, index) => (
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
    zoom: 16,

    // array of objects of markers
    markers: [
      {
        position: content.position,
        showInfo: false,
        title: content.title,
        icon: content.icon,
        infoContent: (
          <div>
            <a target='_blank'href={content.url}>
              {content.title}
              {content.text}
            </a>
          </div>
        ),
      },
    ],
  };

  handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerClose = this.handleMarkerClose.bind(this);

  // Toggle to 'true' to show InfoWindow and re-renders component
  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
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
      markers: this.state.markers.map(marker => {
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
    console.log('render', this.state)
    return (
      <PopUpInfoWindowGoogleMap
        containerElement={
          <div style={{ height: `100%`,width: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%`,width: `100%` }} />
        }
        center={this.state.center}
        markers={this.state.markers}
        onMarkerClick={this.handleMarkerClick}
        onMarkerClose={this.handleMarkerClose}
      />
    );
  }
}

function AgileActorsMap({ sheet }) {
  const { classes } = sheet;
  return (
    <FlexContainer largeContainer
                   className={classes.container}>
      <PopUpInfoWindow />
    </FlexContainer>
  );
};

AgileActorsMap.propTypes = {
  sheet: React.PropTypes.object,
};

export default useSheet(AgileActorsMap, style);