import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
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
            style={styles.parkButton}
            title="UNAVAILABLE"
            disabled={true}
            onPress={() => {}}
          />
        ) : firebase.auth().currentUser ? (
          <Button
            style={styles.parkButton}
            title="PARK HERE"
            onPress={this.props.parkButtonPressed}
          />
        ) : (
          <Button
            style={styles.parkButton}
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
    padding: 20
  },
  popupPrice: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 20
  },
  image: {
    width: 100,
    height: 100
  },
  info: {
    marginBottom: 10
  },
  parkButton: {},
  confirmButton: {
    backgroundColor: "green"
  }
});
