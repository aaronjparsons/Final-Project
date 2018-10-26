<<<<<<< HEAD
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Button,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import ScreenHeader from "../Components/ScreenHeader";
import { Container } from "native-base";
import MapView, { Marker } from "react-native-maps";
=======
import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, StatusBar, Button, TextInput, KeyboardAvoidingView, Container } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import ScreenHeader from "../Components/ScreenHeader";
import firebase from '../Firebase.js';
>>>>>>> 7ef5961a97a735018348c166a854211fef6c86c6

export default class AddASpot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      marker: []
    };
=======
      marker: [],
      address: '',
      picture_url: '',
      user: 'test@gmail.com',
      description: '',
      price: 0,
      latitude: 51.06,
      longitude: -114.050,
      is_rented: false
    }

    this.addSpot = this.addSpot.bind(this);
    this.getSpot = this.getSpot.bind(this);
  }

  getSpot() {
    let spot = {
      title: this.state.address,
      picture_url: this.state.picture_url,
      description: this.state.description,
      price: this.state.price,
      user: this.state.user,
      longitude: this.state.longitude,
      latitude: this.state.latitude
    }
    return spot;
  }

  getCoordinates() {
    // get coordinates from marker
  }

  addSpot(spot) {
    firebase.database().ref("spots").push(spot).then((data)=>{
      //success callback
      console.log('data ' , data)
    }).catch((error)=>{
      //error callback
      console.log('error ' , error)
    })
>>>>>>> 7ef5961a97a735018348c166a854211fef6c86c6
  }

  render() {
    return (
      <ScrollView>
        <ScreenHeader navigation={this.props.navigation} />
        <KeyboardAvoidingView behavior="padding" style={styles.body}>
          <View style={styles.headerContent}>
            <Text>Add a Parking Spot</Text>
          </View>
<<<<<<< HEAD
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 51.0478,
              longitude: -114.0593,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
            }}
            showsMyLocationButton={true}
            showsUserLocation={true}
            // onPress={this.removeCard}
          >
            <Marker
              coordinate={{
                latitude: 51.0478,
                longitude: -114.0593
              }}
              draggable
            />
          </MapView>
=======
>>>>>>> 7ef5961a97a735018348c166a854211fef6c86c6
          <View style={styles.content}>
          <MapView
                style={styles.map}
                initialRegion={{
                  latitude: 51.0478,
                  longitude: -114.0593,
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.1
                }}
                showsMyLocationButton={true}
                showsUserLocation={true}
                // onPress={this.removeCard}
              >
              <Marker
                coordinate={{latitude: 51.0478,
                  longitude: -114.0593}}
                  draggable
              />
              </MapView>
            <TextInput
              style={styles.inputField}
              onChangeText={(text) => this.setState({address: text})}
              placeholder={'Address'}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={(text) => this.setState({picture_url: text})}
              placeholder={'Picture URL'}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={(text) => this.setState({description: text})}
              placeholder={'Description'}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={(text) => this.setState({price: text})}
              placeholder={'Price'}
            />
          </View>
          <Button
            style={styles.button}
            onPress={() => this.addSpot(this.getSpot())}
            title="Save Changes"
            // color="blue"
            accessibilityLabel="Add a parking spot"
          />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    height: 800,
    alignItems: "center"
  },
  inputField: {
    height: 40,
    width: 250,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
    padding: 5
  },
  button: {
    width: 300,
    color: "blue"
  },
  headerContent: {
    padding: 30,
    // fontSize: 10,
    alignItems: "center"
  },
  map: {
    width: 300,
    height: 300
    // flex: 1,
    // justifyContent: 'center'
  }
  // content: {
  //   flex:1,
  //   alignItems:'flex-start',
  //   paddingLeft:5
  // }
});
