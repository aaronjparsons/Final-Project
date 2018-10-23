import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Button } from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";


export default class PaymentInfo extends React.Component {

  _onChange(form) {
    console.log(form);
  }

  render() {

    return (
      <View>
        <CreditCardInput onChange={this._onChange} />
      </View>
    );
  }
}
