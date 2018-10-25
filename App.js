import React from "react";
import { MyApp } from "./config/router.js";
import { View } from "react-native";
import {LoggedOutApp} from "./config/router.js";
// import {  Text, View, StatusBar } from 'react-native';
// import { Header, PricingCard } from 'react-native-elements';
// import MapView from 'react-native-maps';
// import { Marker } from 'react-native-maps';
// import Dashboard from './screens/Dashboard.js';
// import OrderHistory from './screens/OrderHistory.js';
// import MySpots from './screens/MySpots.js';
// import AddASpot from './screens/AddASpot.js';
// import RentHistory from './screens/RentHistory.js'
// import styles from './styles.js'
// import { createStackNavigator } from 'react-navigation';
// import Map from './src/Components/Map'
// import Login from "./src/Components/Login";
// import { createDrawerNavigator, DrawerItems } from "react-navigation";
// import Home from "./src/Components/Home";
// import { Container, Content, Header, Body } from "native-base";
// import HeaderNavigation from './src/Components/Home.js'
import firebase from 'firebase'
import startFirebase from './config/startFirebase'

export default class App extends React.Component {
  constructor(props){
    startFirebase(firebase);
    super(props);
    this.state = {
      user : firebase.auth().currentUser,
      isAuthenticated: false,
    }
    this.authenticate = this.authenticate.bind(this)
    this.logout = this.logout.bind(this)
  }
  authenticate(isAuthenticated, user){
    console.log("WEEE HERE BOII")
    this.setState({user:firebase.auth().currentUser, isAuthenticated:isAuthenticated})
  }

  logout (){
    firebase.auth().signOut().then(()=>{console.log("Signed out")}, ()=>{})
    this.setState({user:null});

  }

  componentWillUnmount(){

  }

  render() {
    console.log("Rendering main")
    return (
      
      <View style={{ width: "100%", height: "100%" }}>
        {this.state.user ? <MyApp screenProps={this.logout}/> : <LoggedOutApp screenProps={this.authenticate}/> }
        {/* <MyApp screenProps={this.logout}/> */}
        { console.log("Rendering in") }
      </View>
    );
  }
}
