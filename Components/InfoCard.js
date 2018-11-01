import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Button } from 'react-native-elements';
import firebase from "../Firebase.js";

const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/parker-7a5ba.appspot.com/o/lot_images%2F';
const endUrl = '%2Flot.jpg?alt=media';

class InfoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image_url: null
    }
  }

  render() {
    return (
      <View style={styles.popup}>
        <Text style={styles.popupPrice}>{`$${this.props.info.price}/hour`}</Text>
        <Image style={styles.image} source={{uri: `${baseUrl}${this.props.info.owner}%2F${this.props.info.id}${endUrl}`}}></Image>
        {this.props.info.info.map((desc, index) => {
          return (
            <Text key={index} style={styles.info}>
              {desc}
            </Text>
          );
        })}
        {this.props.info.is_rented ? (
          <Button
            buttonStyle={styles.disabledButton}
            color='black'
            title="UNAVAILABLE"
            disabled={true}
            onPress={() => {}}
          />
        ) : firebase.auth().currentUser ? (
          <Button
            buttonStyle={styles.parkButton}
            color='#FAFAFA'
            title="PARK HERE"
            onPress={this.props.parkButtonPressed}
          />
        ) : (
          <Button
            buttonStyle={styles.disabledButton}
            color='black'
            title="PLEASE LOGIN"
            disabled={true}
            onPress={() => {}}
          />
        )}
      </View>
    );
  }
}

export default InfoCard;

const styles = StyleSheet.create({
  popup: {
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
  popupPrice: {
    fontFamily: 'sans-serif-thin',
    color: '#FAFAFA',
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10
  },
  info: {
    fontFamily: 'sans-serif-thin',
    marginBottom: 10,
    color: '#FAFAFA',
    textAlign: 'center'
  },
  parkButton: {
    backgroundColor: '#546E7A',
  }
});
