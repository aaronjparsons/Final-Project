import React from "react";
import { StyleSheet, Text, View, Image, StatusBar, Button } from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import ScreenHeader from "../Components/ScreenHeader";
import { Container } from "native-base";

import { doPayment, testGet } from '../Api.js';
import { STRIPE_PKEY } from 'react-native-dotenv';
import Stripe from 'react-native-stripe-api';

const client = new Stripe(STRIPE_PKEY);

export default class PaymentInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      submitButtonDisabled: true
    };
    this.formOnChange = this.formOnChange.bind(this);
  }

  formOnChange(form) {
    if (form.valid === true) {
      console.log("Form valid, ready to submit");
      this.setState({
        submitButtonDisabled: false
      });
    }
    if (form.valid === false && this.state.submitButtonDisabled === false) {
      this.setState({
        submitButtonDisabled: true
      });
    }
  }

  submitPaymentInfo() {
    testGet();
    // Create a Stripe token with new card infos
    // const token = client.createToken({
    //   number: '4242424242424242' ,
    //   exp_month: '12', 
    //   exp_year: '22', 
    //   cvc: '111',
    // }).then((response) => {
    //   console.log(response);
    //   return doPayment(100, response.id);
    // }).then(() => {
    //   console.log('PAYMENT SUCCESS');
    // }).catch((e) => {
    //   console.log('ERROR', e);
    // });
  }

  render() {
    return (
      <Container>
        <ScreenHeader navigation={this.props.navigation} />
        <View>
          <CreditCardInput onChange={this.formOnChange} allowScroll={true} />
          <Button
            title="Add Credit Card"
            disabled={this.state.submitButtonDisabled}
            onPress={this.submitPaymentInfo}
          />
        </View>
      </Container>
    );
  }
}
