import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView
} from "react-native";
import LoginForm from "./LoginForm";
export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/peter.jpg")} />
          <Text style={styles.title}>Park Yo Shit</Text>
        </View>
        <View style={styles.formContainer} />
        <LoginForm />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  logo: {
    height: 200,
    width: 200,
    borderRadius: 75
  },
  title: {
    color: "#fff",
    marginTop: 10
  }
});
