import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './Logo'
import LoginButton from './LoginButton'
import RegisterSection from './RegisterSection'
import Form from './Form'
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.fullscreen_container}>
        <Logo />
        <Form />
        <RegisterSection />
        <LoginButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  fullscreen_container: {
    width: '100%', height: '100%' 
  }
});
