import React from "react"
import {Text, View, StyleSheet, KeyboardAvoidingView} from "react-native"

export default class Register extends React.Component {

  render(){
    
    return (
      <KeyboardAvoidingView>
        <RegisterForm/>
      </KeyboardAvoidingView>
    )
  }
}