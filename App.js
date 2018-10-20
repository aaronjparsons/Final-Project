import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Header } from 'react-native-elements';
import InfoCard from './InfoCard';

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
      markers: [],
      cardPressed: false,
      popUpInfo: {
        price: 1.25,
        info: ['Plug available', '12345 12 Street']
      }
    }
    this.socket = new WebSocket("ws://172.16.203.34:8000/");
  }

  renderCard(data) {  
    this.state.markers.find((marker) => {
      if (data.id === marker.id) {
        this.setState({
          popUpInfo: {
            price: marker.price,
            info: ['Plug available', '12345 12 Street']
          }
        });
      }
    });
    if (!this.state.cardPressed) {
      this.setState({
        cardPressed: true
      });
    }
  }
  

  componentDidMount() {
    this.socket.onopen = (event) => {
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      this.setState({markers: data});
    }

    navigator.geolocation.getCurrentPosition(function(e) {
      this.setState({
        latitude: e.coords.latitude,
        longitude: e.coords.longitude
      });
    });
  }

  render() {
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'PETER PARKER', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        {this.state.cardPressed &&  <InfoCard info={this.state.popUpInfo}/> }
        <MapView
          style={styles.map}
          initialRegion={this.state.region}
          showsUserLocation={true}
          onPress={() => {if (this.state.cardPressed) {this.setState({cardPressed: false})}}}
        >
        {this.state.markers.map(marker => {
          return (
            <Marker
              key={marker.id}
              coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
              onPress={() => this.renderCard({id: marker.id})}
            />
          );
        })}
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
