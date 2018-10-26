import React from "react";
import { SignedOut, SignedIn } from "./config/router.js";
import { View } from "react-native";
import firebase from './Firebase.js';

console.ignoredYellowBox = [
  'Setting a timer'
]

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
    }
  }

  render() {
    // console.log(firebase.auth());
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('logged in')
      } else {
        // No user is signed in.
        console.log('not logged in')
      }
    });
    if (firebase.auth()) {
      return (
        <View style={{ width: "100%", height: "100%", marginTop: 24 }}>
          <SignedIn />
        </View>
      )
    } else {
      return (
        <View style={{ width: "100%", height: "100%", marginTop: 24 }}>
          <SignedOut />
        </View>
      )
    }
  }
}
