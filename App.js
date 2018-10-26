import React from "react";
import { View } from "react-native";
import { LoggedOutApp, MyApp } from "./config/router.js";
// import { SignedOut, SignedIn } from "./config/router.js";
// import { MyApp } from "./config/router.js";

import firebase from 'firebase'
import startFirebase from './config/startFirebase'

console.ignoredYellowBox = ["Setting a timer"];

console.ignoredYellowBox = [
  "Setting a timer"
]

export default class App extends React.Component {
  constructor(props){
    startFirebase(firebase);
    super(props);
    this.state = {
      currentUser : null,
      userObject: null,
        }
    this.authenticate = this.authenticate.bind(this)
    this.logout = this.logout.bind(this)
  }

  _isMounted = false;

  authenticate(userObject){
    if (this._isMounted) {
      this.setState({currentUser:firebase.auth().currentUser,userObject:userObject})
    }  
  }

  logout (){
    if (this._isMounted) {
      firebase.auth().signOut().then(()=>{console.log("Signed out")}, ()=>{})
      this.setState({currentUser:null});
    }
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount(){
    //Warning fix 
    this._isMounted = false;
  }


  render() {
    console.log("Rendering main")
    
    return (
      <View style={{ width: "100%", height: "100%", marginTop: 24 }}>
        {this.state.currentUser ? <MyApp screenProps={{logout:this.logout,userObject:this.state.userObject}} /> : <LoggedOutApp screenProps={this.authenticate}/> }    
      </View>
    );
  }
}
