import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import InfoCard from '../Components/InfoCard';
import ConfirmCard from '../Components/ConfirmCard';
import CurrentRental from '../Components/CurrentRental';

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
      },
      spotRented: false
    }
    this.markerPressed = this.markerPressed.bind(this);
    this.parkButtonPressed = this.parkButtonPressed.bind(this);
    this.parkingConfirmComplete = this.parkingConfirmComplete.bind(this);
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
    this.infoPopup.show()
  }

  parkButtonPressed() {
    console.log('park pressed');
    this.infoPopup.dismiss(() => {
      setTimeout(() => {
        this.confirmPopup.show();
      },200);
    });    
  }

  parkingConfirmComplete() {
    console.log('PAYMENT COMPLETE');
    this.confirmPopup.dismiss();
    this.setState({
      spotRented: true
    })
  }

  render() {
    const slideAnimation = new SlideAnimation({
      slideFrom: 'top',
    });

    return (
      <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
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

        <View style={styles.currentRental}>{this.state.spotRented && <CurrentRental />}</View>

        <View style={styles.popupContainer}>
          <PopupDialog 
            ref={(infoPopup) => { this.infoPopup = infoPopup; }} 
            dialogAnimation={slideAnimation} 
            dialogStyle={styles.dialog}>
            <InfoCard info={this.state.spotInfo} parkButtonPressed={this.parkButtonPressed} />
          </PopupDialog>
          <PopupDialog 
            ref={(confirmPopup) => { this.confirmPopup = confirmPopup; }} 
            dialogAnimation={slideAnimation} 
            dialogStyle={styles.dialog}>
            <ConfirmCard info={this.state.spotInfo} parkingConfirmComplete={this.parkingConfirmComplete}/>
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
  currentRental: {
    position: 'absolute',
    bottom: 0
  }
});