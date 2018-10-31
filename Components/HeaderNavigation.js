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
          STABLE
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
    height: 75,
    backgroundColor: '#3c3c3c'
  },
  button: {
    position: "absolute",
    left: 0,
    marginTop: 20,
    paddingBottom: 20,
    paddingTop: 0,
    backgroundColor: '#3c3c3c',
    width: 80,
  },
  title: {
    color: "white",
    fontSize: 25,
    fontFamily: 'sans-serif-thin',
    // fontStyle: "italic",
    marginTop: 20,
    fontWeight: '100',
    letterSpacing: 1
  },
  icon: {
    marginTop: 20
  }
});
