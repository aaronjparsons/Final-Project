import React from 'react';
import { View, StyleSheet, Text, ActivityIndicator, Image } from 'react-native';
import { Button } from 'react-native-elements';

const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/parker-7a5ba.appspot.com/o/lot_images%2F';
const endUrl = '%2Flot.jpg?alt=media';

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
      this.setState({confirmPressed: true});
      this.props.parkingConfirmComplete();
    }
  }

  resetButton() {
    this.setState({confirmPressed: false});
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
        <Image style={styles.image} source={{uri: `${baseUrl}${this.props.info.owner}%2F${this.props.info.id}${endUrl}`}}></Image>
        <Text style={styles.info}>{this.props.info.info[0]}</Text>
        <Text style={styles.info}>{`$${this.props.info.price}/hour`}</Text>
        {!this.state.confirmPressed ? 
        <Button 
          buttonStyle={styles.parkButton} 
          color='#FAFAFA'
          title='CONFIRM PARKING' 
          onPress={this.confirmButtonPressed} />
        :
        <ActivityIndicator size="large" color="#FAFAFA" />
        }
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
    fontFamily: 'sans-serif-thin',
    color: '#FAFAFA',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontFamily: 'sans-serif-thin',
    color: '#FAFAFA',
    textAlign: 'center',
    marginBottom: 10
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10
  },
  parkButton: {
    backgroundColor: '#546E7A',
  },
});