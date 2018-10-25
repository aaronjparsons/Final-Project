import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import firebase from 'firebase';
import { 
  API_KEY,
  AUTH_DOMAIN,DATABASE_URL,
  PROJECT_ID,STORAGE_BUCKET,
  MESSAGING_SENDER_ID } from 'react-native-dotenv'
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

    firebase.auth().signInWithEmailAndPassword(email,password).then(
      ()=>{
        //If login successful
        alert("login success")},
      (error)=>{
        //If login failed
        alert(error.message);
      }
    )
  };
  
  componentWillMount(){
    var config = {
      apiKey: API_KEY,
      authDomain:AUTH_DOMAIN,
      databaseURL: DATABASE_URL,
      projectId: PROJECT_ID,
      storageBucket:STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  }

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
