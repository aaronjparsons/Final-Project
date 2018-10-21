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
      latitude: 0,
      longitude: 0,
      statusBarHeight: 1
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(e) {
      console.log(e);
      this.setState({
        latitude: e.coords.latitude,
        longitude: e.coords.longitude
      });
    });
  }

  render() {
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
