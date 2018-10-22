import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";
import MapView from "react-native-maps";

export default class HeaderNavigation extends Component {
  render() {
    return (
      
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
