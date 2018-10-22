import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Dashboard from '../screens/Dashboard.js';
import HomeScreen from '../screens/HomeScreen.js';
import OrderHistory from '../screens/OrderHistory.js';
import MySpots from '../screens/MySpots.js';
import AddASpot from '../screens/AddASpot.js';
import RentHistory from '../screens/RentHistory.js'


// import { StackNavigator } from 'react-native-navigation';
// import { Dashboard } from './Dashboard';
// import { OrderHistory } from './OrderHistory';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    OrderHistory: {
      screen: OrderHistory,
    },
    RentHistory: {
      screen: RentHistory,
    },
    MySpots: {
      screen: MySpots,
    },
    AddASpot: {
      screen: AddASpot,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack;