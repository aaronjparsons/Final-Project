import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import InfoCard from '../Components/InfoCard';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
      {
        id: 1,
        latitude: 51.0478,
        longitude: -114.0593,
        title: 'title',
        description: "description",
        price: 1.00
      },
      {
        id : 2,
        latitude: 51.0278,
        longitude: -114.0493,
        title: 'title',
        description: "description",
        price: 2.00
      },
      {
        id: 3,
        latitude: 51.0538,
        longitude: -114.0123,
        "title": 'title',
        "description": "description",
        price: 1.25
      },
      {
        id: 4,
        latitude: 51.0522,
        longitude: -114.0519,
        title: 'title',
        description: "description",
        price: 1.75
      }
    ],
      parkPressed: false,
      spotInfo: {
        price: 1.25,
        info: ['Plug available', '12345 12 Street']
      }
    }
    this.markerPressed = this.markerPressed.bind(this);
    this.parkButtonPressed = this.parkButtonPressed.bind(this);
    this.resetCard = this.resetCard.bind(this);
  }

  showCard(data) {
    this.state.markers.find((marker) => {
      if (data.id === marker.id) {
        this.setState({
          spotInfo: {
            price: marker.price,
            info: ['Plug available', '12345 12 Street']
          }
        });
      }
    });
  }

  markerPressed(data) {
    this.popupDialog.show()
  }
  
  parkButtonPressed() {
    console.log('park pressed');
  }

  resetCard() {
    this.setState({
      parkPressed: false
    });
  }


  render() {
    const slideAnimation = new SlideAnimation({
      slideFrom: 'top',
    });

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
        {this.state.markers.map(marker => {
          return (
            <Marker
              key={marker.id}
              coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
              onPress={() => this.markerPressed(marker)}
            />
          );
        })}
        </MapView>

        <View style={styles.popupContainer}>
          <PopupDialog 
            ref={(popupDialog) => { this.popupDialog = popupDialog; }} 
            dialogAnimation={slideAnimation} 
            dialogStyle={styles.dialog}
            onDismissed={this.resetCard}>
            <InfoCard info={this.state.spotInfo} parkPressed={this.state.parkPressed} parkButtonPressed={this.parkButtonPressed} />
          </PopupDialog>
        </View>
      
      </View>
    );
  }
}

export default Map;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  popupContainer: {
    height: '100%',
    width: '100%',
  },
  dialog: {
    position: 'absolute', 
    top: '4%', 
    width: '90%', 
    height: '38%'
  },
});