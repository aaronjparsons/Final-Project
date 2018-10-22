import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

class CurrentRental extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Currently Renting Spot #12</Text>
      </View>
    );
  }
}

export default CurrentRental;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1194F6',
    margin: '5%',
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
  }
});