import React from "react";
import {
  createDrawerNavigator,
  DrawerItems,
  createStackNavigator
} from "react-navigation";
import { StyleSheet, Image } from "react-native";
import { Container, Content, Header, Body, Icon } from "native-base";

import Dashboard from '../screens/Dashboard.js';
import OrderHistory from '../screens/OrderHistory.js';
import MySpots from '../screens/MySpots.js';
import AddASpot from '../screens/AddASpot.js';
import RentHistory from '../screens/RentHistory.js'
import Map from '../screens/Map.js';
import EditProfile from '../screens/EditProfile.js'
import PaymentInfo from '../screens/PaymentInfo.js';
import Help from '../screens/Help.js';

import Login from '../Components/Login.js';
import Register from '../Components/RegisterForm';

import firebase from '../Firebase.js';

export const RootStack = createStackNavigator(
  {
    Home: {
      screen: Map
    },
    OrderHistory: {
      screen: OrderHistory
    },
    RentHistory: {
      screen: RentHistory
    },
    MySpots: {
      screen: MySpots
    },
    AddASpot: {
      screen: AddASpot,
    },
    EditProfile: {
      screen: EditProfile,
    },
    PaymentInfo: {
      screen: PaymentInfo,
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none'
  }
);

const CustomDrawerContentComponent = props => (
  <Container>
    <Header style={{ height: 200 }}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require("../assets/peter.jpg")}
        />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

export const SignedOut = createDrawerNavigator(
  
  {
    Home: {
      screen: RootStack
    },
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    },
    Help: {
      screen: Help
    }
  },
  {
    InitalRouteName: "Home",
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);

export const SignedIn = createDrawerNavigator(
  
  {
    Home: {
      screen: RootStack
    },
    Dashboard: {
      screen: Dashboard
    },
    Signout: {
      screen: Login
    },
    Help: {
      screen: Help
    }
  },
  {
    InitalRouteName: "Home",
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);

const styles = StyleSheet.create({
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginLeft: 50
  }
});
