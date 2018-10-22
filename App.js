import React from 'react';
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
import RootStack from './config/router.js'

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}