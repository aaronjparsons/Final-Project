import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

class ConfimCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmPressed: false
    }
    this.confirmButtonPressed = this.confirmButtonPressed.bind(this);
  }

  _isMounted = false;

  confirmButtonPressed() {
    if (this._isMounted) {
      this.props.parkingConfirmComplete()
    }
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <View style={styles.popup}>
        <Text style={styles.popupPrice}>CONFIRM?</Text>
        {this.props.info.info.map((desc, index) => {
          return <Text key={index} style={styles.info}>{desc}</Text>
        })}
        <Button style={styles.parkButton} title='CONFIRM PARKING' onPress={this.confirmButtonPressed} />
      </View>
    );
    }
}
  
export default ConfimCard;

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