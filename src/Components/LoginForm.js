import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="  Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
        />
        <TextInput
          style={styles.input}
          placeholder="  Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.7)",
    marginTop: 20,
    borderRadius: 45,
    paddingLeft: 10
  }
});
