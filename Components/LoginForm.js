import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
  validate = () => {
    const { email, password } = this.state;
    if (email == "") {
      this.setState({ Error: "Please provide a Valid Email" });
    } else if (password == "") {
      this.setState({ Error: "Please provide a valid password" });
    } else {
      this.setState({});
    }
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
