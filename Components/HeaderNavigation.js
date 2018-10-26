import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Icon, Button, Header } from "native-base";

export default class HeaderNavigation extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <Text
          onPress={() => this.props.navigation.navigate("Home")}
          style={styles.title}
        >
          Peter Parker
        </Text>
        <Button
          style={styles.button}
          onPress={() => this.props.navigation.openDrawer()}
        >
          <Icon style={styles.icon} name="menu" />
        </Button>
      </Header>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  header: {
    height: 75
  },
  button: {
    position: "absolute",
    left: 0,
    marginTop: 20,
    paddingBottom: 20,
    paddingTop: 0
  },
  title: {
    color: "white",
    fontSize: 30,
    fontStyle: "italic",
    marginTop: 20
  },
  icon: {
    marginTop: 20
  }
});
