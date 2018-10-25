import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableHighlight } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import InfoCard from '../Components/InfoCard';
import ConfirmCard from '../Components/ConfirmCard';
import StatusCard from '../Components/StatusCard';
import CurrentRental from '../Components/CurrentRental';
import HeaderNavigation from "../Components/HeaderNavigation.js";
import { Container } from "native-base";

import firebase from '../Firebase.js';

// import { API_KEY, AUTH_DOMAIN,DATABASE_URL, PROJECT_ID,STORAGE_BUCKET, MESSAGING_SENDER_ID } from 'react-native-dotenv';
// import firebase from 'firebase';

// const config = {
//   apiKey: API_KEY,
//   authDomain:AUTH_DOMAIN,
//   databaseURL: DATABASE_URL,
//   projectId: PROJECT_ID,
//   storageBucket:STORAGE_BUCKET,
//   messagingSenderId: MESSAGING_SENDER_ID
// };
// firebase.initializeApp(config);


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      parkPressed: false,
      spotInfo: {
        price: 1.25,
        info: ['Plug available', '12345 12 Street']
      },
      spotRented: false,
    }
    this.markerPressed = this.markerPressed.bind(this);
    this.parkButtonPressed = this.parkButtonPressed.bind(this);
    this.parkingConfirmComplete = this.parkingConfirmComplete.bind(this);
    this.statusPressed = this.statusPressed.bind(this);
  }

  _onMapReady = () => {
    console.log('map ready');
  }

  showCard(data) {
    this.state.markers.find(marker => {
      if (data.id === marker.id) {
        this.setState({
          spotInfo: {
            price: marker.price,
            info: ["Plug available", "12345 12 Street"]
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

  statusPressed() {
    console.log('status pressed');
    this.statusPopup.show();
  }

  componentDidMount() {
    const self = this;
    firebase.database().ref('/spots/').once('value').then(function(data) {
      let spots = [];
      data.forEach(function(childSnapshot) {
        let item = childSnapshot.val();
        item.id = childSnapshot.key;
        spots.push(item);
      });
      self.setState({
        markers: spots
      });
    });
  }

  render() {
    const slideAnimation = new SlideAnimation({
      slideFrom: "top"
    });

    return (
      <Container>
        <HeaderNavigation navigation={this.props.navigation} />
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
            
            <View style={styles.currentRental}>
              {this.state.spotRented && 
                <TouchableHighlight onPress={this.statusPressed}>
                  <CurrentRental />
                </TouchableHighlight>}         
            </View>

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
              <PopupDialog 
                ref={(statusPopup) => { this.statusPopup = statusPopup; }} 
                dialogAnimation={slideAnimation} 
                dialogStyle={styles.statusDialog}>
                <StatusCard info={this.state.spotInfo} />
              </PopupDialog>
            </View>
        </View>
      </Container>
    );
  }
}

export default Map;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  popupContainer: {
    height: "100%",
    width: "100%"
  },
  dialog: {
    position: 'absolute', 
    top: '4%', 
    width: '90%', 
    height: '38%'
  },
  statusDialog: {

  },
  currentRental: {
    position: 'absolute',
    bottom: '10%'
  }
});
