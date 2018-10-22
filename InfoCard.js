import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.popup}>
        <Text style={styles.popupPrice}>{`$${this.props.info.price}/hour`}</Text>
        {this.props.info.info.map((desc, index) => {
          return <Text key={index} style={styles.info}>{desc}</Text>
        })}
        <Button style={styles.button} title='PARK HERE' onPress={() => console.log('pressed')}></Button>
      </View>
    );
  }
}

export default InfoCard;

const styles = StyleSheet.create({
  popup: {
    display: 'flex',
    alignItems: 'center',
    padding: 20
  },
  popupPrice: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    marginBottom: 10
  },
  button: {
  }
});