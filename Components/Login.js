import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import LoginForm from "./LoginForm";
export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/peter.jpg")}
          />
          <Text style={styles.title}>Park Yo Shit</Text>
        </View>
        <View style={styles.formContainer} />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db"
  },
  logoContainer: {
    alignItems: "center"
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 75
  },
  title: {
    color: "#fff",
    marginTop: 10
  }
});
