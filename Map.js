import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Animatable from 'react-native-animatable';
import InfoCard from './InfoCard';
import ConfirmCard from './ConfirmCard';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardPressed: false,
      parkPressed: false,
      spotInfo: {
        price: 1.25,
        info: ['Plug available', '12345 12 Street']
      }
    }
    this.removeCard = this.removeCard.bind(this);
    this.parkHerePressed = this.parkHerePressed.bind(this);
  }

  showCard(data) {
    this.props.markers.find((marker) => {
      if (data.id === marker.id) {
        this.setState({
          spotInfo: {
            price: marker.price,
            info: ['Plug available', '12345 12 Street']
          }
        });
      }
    });
    if (!this.state.cardPressed) {
      this.refs.infocard.bounceIn(1000);
      this.setState({
        cardPressed: true
      });
    }
  }

  removeCard() {
    if (this.state.cardPressed) {
      this.refs.infocard.bounceOut(500);
      setTimeout(() => { 
        this.setState({cardPressed: false});
      }, 700);
    }
    if (this.state.parkPressed) {
      this.refs.confirmcard.bounceOut(500);
      setTimeout(() => { 
        this.setState({parkPressed: false});
      }, 700);
    }
  }

  parkHerePressed() {
    this.removeCard();
    if (!this.state.parkPressed) {
      setTimeout(() => {
        this.refs.confirmcard.bounceIn(1000);
        this.setState({
          parkPressed: true
        });
      }, 700);
    }
  }

  render() {
    return (
      <View style={{width: '100%', height: '100%'}}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 51.0478,
            longitude: -114.0593,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
          }}
          showsUserLocation={true}
          onPress={this.removeCard}
        >
        {this.props.markers.map(marker => {
          return (
            <Marker
              key={marker.id}
              coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
              onPress={() => this.showCard({id: marker.id})}
            />
          );
        })}
        </MapView>
        <Animatable.View ref="infocard">
            {this.state.cardPressed &&  <InfoCard info={this.state.spotInfo} buttonPressed={this.parkHerePressed}/> }
        </Animatable.View>
        <Animatable.View ref="confirmcard">
            {this.state.parkPressed &&  <ConfirmCard info={this.state.spotInfo} buttonPressed={this.parkHerePressed}/> }
        </Animatable.View>
      </View>
    );
  }
}

export default Map;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});