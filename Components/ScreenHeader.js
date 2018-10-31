import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Icon, Button, Container, Header, Content, Left } from "native-base";

export default class ScreenHeader extends Component {
  render() {
    return (
      <Header style={styles.header}>
        <Text
          onPress={() => this.props.navigation.navigate("Home")}
          style={styles.title}
        >
          Stable
        </Text>
        <Button
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          <Icon style={styles.icon} name="ios-arrow-back" />
        </Button>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 75,
    backgroundColor: "#2f2f2f"
  },
  button: {
    position: "absolute",
    left: 0,
    marginTop: 20,
    paddingBottom: 20,
    paddingTop: 0,
    backgroundColor: "#2f2f2f"
  },
  title: {
    color: "white",
    fontSize: 30,
    fontStyle: "italic",
    marginTop: 20,
    fontFamily: "sans-serif-thin"
  },
  icon: {
    marginTop: 20
  }
});
