import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Login from "./src/Components/Login";
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import Home from "./src/Components/Home";
import { Container, Content, Header, Body } from "native-base";
import MapView from "react-native-maps";
import Marker from "react-native-maps";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: 51.0478,
        longitude: -114.0593,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      },
      latitude: 0,
      longitude: 0,
      markers: [
        {
          id: 1,
          longitude: 51.0478,
          latitude: -114.0593,
          title: "title",
          description: "description"
        }
      ]
    };
    this.socket = new WebSocket("ws://172.16.203.34:8000/");
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  createMarkers() {
    this.state.markers.map(marker => {
      console.log("marker console log", marker);
      return (
        <Marker
          key={marker.id}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude
          }}
          title={marker.title}
          description={marker.description}
        />
      );
    });
  }

  componentDidMount() {
    this.socket.onopen = event => {};

    this.socket.onmessage = event => {
      const data = JSON.parse(event.data);
      // this.setState({markers: data});
    };

    navigator.geolocation.getCurrentPosition(function(e) {
      this.setState({
        latitude: e.coords.latitude,
        longitude: e.coords.longitude
      });
    });
  }

  render() {
    const markers = this.createMarkers();

    return (
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
