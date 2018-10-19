import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 51.0478,
        longitude: -114.0593,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      },
      latitude: 0,
      longitude: 0,
      markers: [{
        id: 1,
        longitude: 51.0478,
        latitude: -114.0593,
        title: 'title',
        description: "description"
      }],
    }
    this.socket = new WebSocket("ws://172.16.203.34:8000/");;
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  createMarkers() {
    this.state.markers.map((marker) => {
      console.log('marker console log', marker);
      return (
        <Marker
          key={marker.id}
          coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
          title={marker.title}
          description={marker.description}
        />
      );
    });
  }

  componentDidMount() {
    this.socket.onopen = (event) => {
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // this.setState({markers: data});
    }

    navigator.geolocation.getCurrentPosition(function(e) {
      this.setState({
        latitude: e.coords.latitude,
        longitude: e.coords.longitude
      });
    });
  }

  render() {
    const markers = this.createMarkers();

    return (
      <View style={{ width: '100%', height: '100%' }}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'PETER PARKER', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <MapView
          style={styles.map}
          region={this.state.region}
          // onRegionChange = {this.onRegionChange}
          showsUserLocation={true}
        >
          {markers}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 65
  },
});
