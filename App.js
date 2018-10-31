import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { LoggedOutApp, MyApp } from "./config/router.js";

import firebase from 'firebase'

console.ignoredYellowBox = ["Setting a timer"];
console.disableYellowBox = true;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser : null,
      userObject: null,
      loading: true,
        }
    this.authenticate = this.authenticate.bind(this)
    this.logout = this.logout.bind(this)
    this.isLoggedIn = this.isLoggedIn.bind(this)
  }

  _isMounted = false;

  authenticate(userObject) {
    if (this._isMounted) {
      this.setState({currentUser:firebase.auth().currentUser,userObject:userObject, loading: false})
    }  
  }

  logout() {
    if (this._isMounted) {
      firebase.auth().signOut().then(()=>{console.log("Signed out")}, ()=>{})
      this.setState({
        currentUser:null,
        loading: false
      });
    }
  }

  isLoggedIn() {
    let userEmail = firebase.auth().currentUser.email;
    firebase
      .database()
      .ref("users")
      .on(
        "value",
        data => {
          for (let keys in data.val()) {
            if (userEmail === data.val()[keys].email) {
              userObject = data.val()[keys];
              this.authenticate(userObject);
            }
          }
        },
        () => {}
      );
  }

  componentDidMount() {
    this._isMounted = true;
    // Call this function when app mounts
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // currentUser should be non null.
        this.isLoggedIn();
      } else {
        // no user logged in. currentUser is null.
        console.log('yeah you definitely logged out')
        this.setState({currentUser:null, loading: false});
      }
    });
  }

  componentWillUnmount() {
    //Warning fix
    this._isMounted = false;
  }

  render() {
    console.log("Rendering main");

    return (
      <View>
        {!this.state.loading ?
          <View style={{ width: "100%", height: "100%", marginTop: 24, paddingBottom: 48}}>
            {firebase.auth().currentUser ? <MyApp screenProps={{logout:this.logout,userObject:this.state.userObject}} /> : <LoggedOutApp screenProps={this.authenticate}/> }    
          </View>
        :
        <View style={styles.loadingView}>
          <View>
            <Text style={styles.text}>LOADING...</Text>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingView: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '30%'
  },
  text: {
    fontSize: 32
  }
});

console.disableYellowBox = true;
