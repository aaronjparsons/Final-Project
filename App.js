import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

import Map from './Map'


import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Login from "./src/Components/Login";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import Home from "./src/Components/Home";
import { Container, Content, Header, Body } from "native-base";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: [],
    }
    this.socket = new WebSocket("ws://172.16.203.34:8000/");
  }

  componentDidMount() {
    this.socket.onopen = (event) => {
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      this.setState({markers: data});
    }
  }

  render() {
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'PETER PARKER', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Map markers={this.state.markers} />
      <View style={{ width: "100%", height: "100%" }}>
        <MyApp />
      </View>
    );
  }
}
const CustomDrawerContentComponent = props => (
  <Container>
    <Header style={{ height: 200 }}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require("./assets/peter.jpg")}
        />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);
const MyApp = createDrawerNavigator(
  {
    Home: {
      screen: Home
    },
    Logout: {
      screen: Login
    }
  },
  {
    InitalRouteName: "Account",
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
    marginLeft: 45
  }
});
