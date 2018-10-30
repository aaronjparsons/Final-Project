import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

class CurrentRental extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Currently Renting</Text>
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