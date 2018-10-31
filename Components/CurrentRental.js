import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import firebase from '../Firebase.js';

class CurrentRental extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mins: 0
    }
    this.timer = null;
  }

  currentTimeParked() {
    firebase.database().ref(`/orders/${this.props.order}`).once('value', (data) => {
      const start = data.val().start;
      const now = Date.now();
      const time = parseInt((now - start) / 60000);
      this.setState({
        mins: time
      });
    });
  }

  startTimer() {
    // this.currentTimeParked();
    if (!this.timer) {
      this.currentTimeParked();
      this.timer = setInterval(() => {
        this.currentTimeParked();
      }, 60000);
    }
  }

  clearTimer() {
    clearInterval(this.timer);
    this.timer = null;
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{`Currently Renting: ${this.state.mins} Mins`}</Text>
        <Text style={styles.smallText}>Tap for more details</Text>
      </View>
    );
  }
}

export default CurrentRental;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1194F6',
    margin: '10%',
    padding: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#0773c5'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  smallText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  }
});