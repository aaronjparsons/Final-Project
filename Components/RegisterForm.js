import React from "react"
import {TextInput, Text, View, StyleSheet, Dimensions, TouchableOpacity} from "react-native"
import firebase from 'firebase';
import { 
  API_KEY,
  AUTH_DOMAIN,DATABASE_URL,
  PROJECT_ID,STORAGE_BUCKET,
  MESSAGING_SENDER_ID } from 'react-native-dotenv'
export default class Register extends React.Component {
  constructor(){
    super()
    this.componentWillMount(){
      var config = {
        apiKey: API_KEY,
        authDomain:AUTH_DOMAIN,
        databaseURL: DATABASE_URL,
        projectId: PROJECT_ID,
        storageBucket:STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID
      };
      firebase.initializeApp(config);
    }
    this.state = {
      first_name:'', last_name:'',
      email:'', phone_number: '',
      password:'',password_conf:''
    }
    this.registerUser = this.registerUser.bind(this)
    this.getUserInfo = this.getUserInfo.bind(this)
  }
  registerUser(){
    dummyUser = this.getUserInfo()
    knex("users")
    .insert({
      first_name:dummyUser.first_name,
      last_name:dummyUser.last_name,
      email:dummyUser.email,
      phone_number:dummyUser.phone_number,
      password_digest:dummyUser.password,
    })
  }
  getUserInfo(){
    let dummyUser = new Object()
    dummyUser.first_name = this.state.first_name;
    dummyUser.last_name = this.state.last_name;
    dummyUser.email = this.state.email;
    dummyUser.phone_number = this.state.phone_number;
    dummyUser.password = this.state.password;
    console.log(dummyUser)
    return dummyUser;
  }
  render(){
    return (
      <View style={styles.container}>
        <TextInput underlineColorAndroid='transparent' style={styles.debug} placeholder="First Name"
        onChangeText = {(first_name)=> {this.setState({first_name})}}/>
        <TextInput underlineColorAndroid='transparent' style={styles.debug} placeholder="Last Name"
        onChangeText = {(last_name)=> {this.setState({last_name})}}/>
        <TextInput underlineColorAndroid='transparent' textContentType={"emailAddress"}style={styles.debug}
        onChangeText = {(email)=> {this.setState({email})}} placeholder="Email" autoCapitalize = "none"/>
        <TextInput underlineColorAndroid='transparent' style={styles.debug} placeholder="Phone number"
        onChangeText = {(phone_number)=> {this.setState({phone_number})}}/>
        <TextInput underlineColorAndroid='transparent' secureTextEntry = {true} style={styles.debug}
        onChangeText = {(password)=> {this.setState({password})}} placeholder="Password"/>
        <TextInput underlineColorAndroid='transparent' secureTextEntry = {true} style={styles.debug} 
        onChangeText = {(password_conf)=> {this.setState({password_conf})}} placeholder="Confirm Password"/>

        <TouchableOpacity onPress={this.registerUser}  style={styles.button}>
         <Text>Register</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    borderWidth:1,
    borderColor: "gray"
  },
  debug : {
    width:Dimensions.get('window').width * 0.8,
    height:40,
    borderWidth:1,
    borderColor: "gray",
    alignSelf:"center",
    borderRadius: 30,
    marginBottom:10,
    paddingLeft: 10,
  }, 
  button: {
    borderRadius:30,
    borderWidth:1,
    borderColor: 'gray',
    width:Dimensions.get('window').width * 0.4,
    height:40,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  text : {
    alignSelf: "center"
  }

})