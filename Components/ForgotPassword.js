import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";
import firebase from "firebase";
import { Header, Button, Icon } from "native-base";
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  resetPassword() {
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(function() {
        alert("Check Your Email");
      })
      .catch(function(e) {
        alert(e);
      });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Header style={styles.header}>
          <Text
            onPress={() => this.props.navigation.navigate("Home")}
            style={styles.parker}
          >
            Stable
          </Text>
          <Button
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Icon style={styles.icon} name="ios-arrow-back" />
          </Button>
        </Header>
        <Text style={styles.title}>Please Enter Email Address</Text>
        <TextInput
          blurOnSubmit={false}
          style={styles.input}
          onChangeText={email => this.setState({ email })}
          placeholder="  Email"
          returnKeyType="go"
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity
          style={styles.reset}
          onPress={this.resetPassword.bind(this)}
        >
          <Text style={styles.buttontext}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.login}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={styles.logintext}> Back To Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: "#8a8a8a",
    marginTop: 10,
    borderRadius: 45,
    paddingLeft: 10,
    paddingVertical: 10
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
    fontFamily: "sans-serif-thin",
    color: "#FFFFFF"
  },
  header: {
    height: 75,
    backgroundColor: "#2f2f2f",
    fontFamily: "sans-serif-thin"
  },
  button: {
    position: "absolute",
    left: 0,
    marginTop: 20,
    paddingBottom: 20,
    paddingTop: 0,
    backgroundColor: "#2f2f2f",
    fontFamily: "sans-serif-thin"
  },
  parker: {
    color: "white",
    fontSize: 30,
    fontStyle: "italic",
    marginTop: 20,
    fontFamily: "sans-serif-thin"
  },
  icon: {
    marginTop: 20
  },
  scrollview: {
    flex: 1
  },
  email: {
    color: "#3366BB"
  },
  login: {
    marginTop: 400,
    marginLeft: 150
  },
  reset: {
    marginTop: 10,
    borderRadius: 45,
    backgroundColor: "#F5F5F5",
    paddingVertical: 15,
    paddingLeft: 150,
    backgroundColor: "#8a8a8a"
  },
  container: {
    backgroundColor: "#3c3c3c",
    height: "100%"
  },
  buttontext: {
    fontFamily: "sans-serif-thin"
  },
  logintext: {
    fontFamily: "sans-serif-thin",
    color: "#FFFFFF"
  }
});
