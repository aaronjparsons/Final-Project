import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import firebase from '../Firebase';

export default class LoginForm extends Component {
  constructor() {
    super();
    var provider = new firebase.auth.GoogleAuthProvider();

    this.state = {
      email: "",
      password: ""
    };
  }
  validate = () => {
    const { email, password } = this.state;

    firebase.auth().signInWithRedirect(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red", textAlign: "center" }}>
          {this.state.Error}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="  Email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          placeholder="  Password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="go"
          returnKeyLabel="Login"
          secureTextEntry
          underlineColorAndroid="transparent"
          ref={input => (this.passwordInput = input)}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity
          onPress={this.validate}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
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
    marginTop: 10,
    borderRadius: 45,
    paddingLeft: 10,
    paddingVertical: 10
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 45,
    backgroundColor: "#2980b9",
    paddingVertical: 15
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF"
  }
});
