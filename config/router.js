import React from "react";
import {
  createDrawerNavigator,
  DrawerItems,
  createStackNavigator
} from "react-navigation";
import { StyleSheet, Image } from "react-native";
import { Container, Content, Header, Body,Text, Icon, Root } from "native-base";

import Dashboard from "../screens/Dashboard.js";
import OrderHistory from "../screens/OrderHistory.js";
import MySpots from "../screens/MySpots.js";
import AddASpot from "../screens/AddASpot.js";
import RentHistory from "../screens/RentHistory.js";
import Map from "../screens/Map.js";
import EditProfile from "../screens/EditProfile.js";
import PaymentInfo from "../screens/PaymentInfo.js";
import Help from "../screens/Help.js";

import Login from "../Components/Login.js";
import Register from "../Components/RegisterForm";

// import HomeScreen from '../screens/HomeScreen.js';
// import { StackNavigator } from 'react-native-navigation';
// import { Dashboard } from './Dashboard';
// import { OrderHistory } from './OrderHistory';
import firebase from 'firebase'
import startFirebase from './startFirebase'
startFirebase(firebase);
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
      screen: AddASpot
    },
    EditProfile: {
      screen: EditProfile
    },
    PaymentInfo: {
      screen: PaymentInfo
    }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
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
        <Text style={{color:"white",alignSelf:"center"}}>Welcome! {props.screenProps.userObject.first_name}</Text>
      </Body>
    </Header>
    <Content>
    <DrawerItems
        {...props}
        onItemPress = {
          ( route, focused ) =>       
          {    
            props.onItemPress({ route, focused })
            //If the presses item is Logout, call the props
            if(route.route.key === 'Logout'){
              props.screenProps.logout()
            }
            else if(route.route.key === 'Home'){
              props.navigation.navigate("Home")
            }
            else if(route.route.key === 'Dashboard'){
              props.navigation.navigate("Dashboard")
            }
            else if(route.route.key === 'Help'){
              props.navigation.navigate("Help")
            }
            
          }
          }/>    
      </Content>
  </Container>
);

const CustomDrawerContentComponentLoggedOut = props => (
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
    <DrawerItems {...props}/>    
      </Content>
  </Container>
);

export const MyApp = createDrawerNavigator(
 
  {
    Home: {
      screen: RootStack
    },
    Dashboard: {
      screen:props => <Dashboard {...props} user = {props.screenProps.userObject}/>
    },
    Logout: {
      screen: RootStack
    },
    Help : {
      screen : Help
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



export const LoggedOutApp = createDrawerNavigator(
 
  {
    Home: {
      screen: RootStack
    },
    Login: {  
      screen: props => <Login {...props} authenticate = {props.screenProps}/>
    },
    Register: {
      screen:Register
    },
    Help : {
      screen : Help
    }
  },
  {
    InitalRouteName: "Home",
    contentComponent: CustomDrawerContentComponentLoggedOut,
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
