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
      <KeyboardAvoidingView>
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
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="go"
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity onPress={this.resetPassword.bind(this)}>
          <Text>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text>Go To Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.7)",
    marginTop: 10,
    borderRadius: 45,
    paddingLeft: 10,
    paddingVertical: 10
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    padding: 4
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
  parker: {
    color: "white",
    fontSize: 30,
    fontStyle: "italic",
    marginTop: 20
  },
  icon: {
    marginTop: 20
  },
  scrollview: {
    flex: 1
  },
  email: {
    color: "#3366BB"
  }
});
