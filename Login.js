import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import Logo from './Logo'

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.fullscreen_container}>
      <Logo/>
      {/* <Form/> */}
      {/* <Username/>
      <Password/>
      <LoginButton/>
      <RegisterLink/>
      <ResetPassLink/> */}
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
