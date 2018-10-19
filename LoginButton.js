import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Animated,
  Easing,
  Image,
  Alert,
  View,
} from 'react-native';
// import {Actions, ActionConst} from 'react-native-router-flux';

// import spinner from '../images/loading.gif';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default class ButtonSubmit extends Component {
  constructor() {
    super();

    // this.state = {
    //   isLoading: false,
    // };

    // this.buttonAnimated = new Animated.Value(0);
    // this.growAnimated = new Animated.Value(0);
    // this._onPress = this._onPress.bind(this);
  }

  // _onPress() {
  //   if (this.state.isLoading) return;

  //   this.setState({isLoading: true});
  //   Animated.timing(this.buttonAnimated, {
  //     toValue: 1,
  //     duration: 200,
  //     easing: Easing.linear,
  //   }).start();

  //   setTimeout(() => {
  //     this._onGrow();
  //   }, 2000);

  //   setTimeout(() => {
  //     Actions.secondScreen();
  //     this.setState({isLoading: false});
  //     this.buttonAnimated.setValue(0);
  //     this.growAnimated.setValue(0);
  //   }, 2300);
  // }

  // _onGrow() {
  //   Animated.timing(this.growAnimated, {
  //     toValue: 1,
  //     duration: 200,
  //     easing: Easing.linear,
  //   }).start();
  // }

  render() {
    // const changeWidth = this.buttonAnimated.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
    // });
    // const changeScale = this.growAnimated.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [1, MARGIN],
    // });

    return (
      <View style={styles.container}>
        
          <TouchableOpacity
            style={styles.button}
            // onPress={}
            activeOpacity={1}>
            <Text style={styles.text}>LOGIN</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: -95,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2980B9',
    height: MARGIN,
    borderRadius: 5,
    zIndex: 100,
    width:100
  },
  text: {
    color: 'white',
    backgroundColor: 'transparent',
  }
});