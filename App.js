import React from "react";
import { View } from "react-native";
import { LoggedOutApp, MyApp } from "./config/router.js";

import firebase from "firebase";
import startFirebase from "./config/startFirebase";

console.ignoredYellowBox = ["Setting a timer"];
// console.ignoredYellowBox = ["Setting a timer"];
// console.ignoredYellowBox = ["Setting a timer"];

export default class App extends React.Component {
  constructor(props) {
    startFirebase(firebase);
    super(props);
    this.state = {
      currentUser: null,
      userObject: null
    };
    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
  }

  _isMounted = false;

  authenticate(userObject) {
    if (this._isMounted) {
      this.setState({
        currentUser: firebase.auth().currentUser,
        userObject: userObject
      });
    }
  }

  logout() {
    if (this._isMounted) {
      firebase
        .auth()
        .signOut()
        .then(
          () => {
            console.log("Signed out");
          },
          () => {}
        );
      this.setState({ currentUser: null });
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
        console.log("yeah you definitely logged out");
        this.setState({ currentUser: null });
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
      <View style={{ width: "100%", height: "100%", marginTop: 24 }}>
        {firebase.auth().currentUser ? (
          <MyApp
            screenProps={{
              logout: this.logout,
              userObject: this.state.userObject
            }}
          />
        ) : (
          <LoggedOutApp screenProps={this.authenticate} />
        )}
      </View>
    );
  }
}

console.disableYellowBox = true;
