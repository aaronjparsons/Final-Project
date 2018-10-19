import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      statusBarHeight: 1,
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(e) {
      console.log(e);
      this.setState({
        latitude: e.coords.latitude,
        longitude: e.coords.longitude
      });
    });
  }

  render() {
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 51.0478,
            longitude: -114.0593,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
          showsUserLocation={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
