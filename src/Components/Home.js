import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";
import MapView from "react-native-maps";
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button
              style={styles.button}
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon style={styles.icon} name="menu" />
            </Button>
          </Left>
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 51.0478,
              longitude: -114.0593,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
            }}
            showsUserLocation={true}
          />
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  header: {
    height: 90
  },
  button: {
    position: "absolute",
    left: 0
  },
  icon: {}
});
