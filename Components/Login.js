import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import firebase from "firebase";
import LoginForm from "./LoginForm";
import { Button } from "native-base";
// import firebase from '../Firebase.js'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      user: {}
    };
    this.login = this.login.bind(this);
  }

  login() {
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}
        keyboardVerticalOffset={250}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/parkpark.jpg")}
          />
          <Text style={styles.title}>Stable</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm
            login={this.login}
            authenticate={this.props.authenticate}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ForgotPassword")}
            style={styles.forgotpassword}
          >
            <Text>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
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
    height: 300,
    width: 300,
    borderRadius: 65
  },
  title: {
    color: "#fff",
    marginTop: 10,
    paddingTop: 10
  },
  formContainer: {
    marginBottom: 65
  },
  forgotpassword: {
    marginLeft: 150,
    paddingBottom: 30
  }
});
