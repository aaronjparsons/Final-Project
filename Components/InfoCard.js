import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
  }


  confirmPressed() {
    console.log('CONFIRM!!');
  }

  componentDidMount() {
    console.log('card rendered');
  }

  render() {
    return (
      <View style={styles.popup}>
        <Text style={styles.popupPrice}>{`$${this.props.info.price}/hour`}</Text>
        {this.props.info.info.map((desc, index) => {
          return <Text key={index} style={styles.info}>{desc}</Text>
        })}
        <Button style={styles.parkButton} title='PARK HERE' onPress={this.props.parkButtonPressed} />
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
  parkButton: {
  },
  confirmButton: {
    backgroundColor: 'green'
  }
});