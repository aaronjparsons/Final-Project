import React from 'react';
import { MyApp } from './config/router.js'
import { View } from "react-native";

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

export default class App extends React.Component {

  render() {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <MyApp />
      </View>
    );
  }
}
