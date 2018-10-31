import React from "react";
import { View, StyleSheet, Text, Button, ActivityIndicator } from "react-native";
import Map from "../screens/Map.js";
import firebase from "../Firebase.js";
import { doPayment } from "../Api.js";

class StatusCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkoutPressed: false,
      currentTime: null
    }
  }

  calculateTotal(order) {
    firebase.database().ref(`/orders/${order}`).once('value', (data) => {
      const start = data.val().start;
      const end = data.val().end;
      const diff = (end - start) / 60000;
      const pricePerMin = this.props.info.price / 60;
      let total = Math.round((diff * pricePerMin) * 100); // Times 100 to be in cents
      if (total < 50) {
        total = 50; // Minimum 50 cent charge
      }
      firebase.database().ref(`/orders/${this.props.id}/totalPayed`).set(total);
      this.checkout(order, total)
    });
  }

  checkout(orderId, total) {
    let currentUser = firebase.auth().currentUser;
    let userStripeId = null;
    firebase.database().ref(`/users/${currentUser.uid}`).once('value', (data) => {
      userStripeId = data.val().stripe_id;
    });
    doPayment(total, userStripeId)
    .then((data) => {
      // console.log(data)
      this.props.checkout();
    });
  }

  updateOrderData(id) {
    this.setState({checkoutPressed: true});
    firebase
      .database()
      .ref("/orders/" + id)
      .update({
        end: Date.now()
      }).then(() => {
        this.calculateTotal(id);
      });
  }

  currentTimeParked() {
    firebase.database().ref(`/orders/${this.state.currentOrder}`).once('value', (data) => {
      const start = data.val().start;
      const now = Date.now();
      const time = Math.round((now - start) / 60000);
      console.log('currentTimeParked()', time, this.state.currentTime);
      this.setState({
        currentTime: time
      });
    });
  }

  resetButton() {
    this.setState({checkoutPressed: false});
  }

  render() {
    return (
      <View style={styles.popup}>
        <Text style={styles.popupPrice}>Current Parking Session</Text>
        <Text> Minutes Currently</Text>
        {this.props.info.info.map((desc, index) => {
          return (
            <Text key={index} style={styles.info}>
              {desc}
            </Text>
          );
        })}
        {!this.state.checkoutPressed ?
        <Button
          title="CHECKOUT"
          onPress={() => {
            console.log("CHECKOUT PRESSED");
            // this.checkout();
            this.updateOrderData(this.props.id);
          }}
        />
        :
        <ActivityIndicator size="large" color="#0000ff" />
        }
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
