import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Map from "../screens/Map.js";
import firebase from "../Firebase.js";
import { doPayment } from "../Api.js";

class StatusCard extends React.Component {
  constructor(props) {
    super(props);
  }

  checkout() {
    let userStripeId = null;
    let currentUser = firebase.auth().currentUser;
    firebase.database().ref('users').once('value', (users) => {
      users.forEach((user) => {
        if (user.val().email === currentUser.email) {
          userStripeId = user.val().stripe_id;
        }
      });
      doPayment(100, userStripeId)
      .then((data) => {
        console.log(data)
        this.props.checkout();
      });
    });
  }

  updateOrderData(id) {
    firebase
      .database()
      .ref("/orders/" + id)
      .update({
        end: Date.now()
      });
  }

  render() {
    return (
      <View style={styles.popup}>
        <Text style={styles.popupPrice}>Current Parking Session</Text>
        <Text>X Minutes Parked</Text>
        {this.props.info.info.map((desc, index) => {
          return (
            <Text key={index} style={styles.info}>
              {desc}
            </Text>
          );
        })}
        <Button
          title="CHECKOUT"
          onPress={() => {
            console.log("CHECKOUT PRESSED");
            this.checkout()
            this.updateOrderData(this.props.id);
          }}
        />
      </View>
    );
  }
}

export default StatusCard;

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
  info: {
    marginBottom: 10
  }
});
