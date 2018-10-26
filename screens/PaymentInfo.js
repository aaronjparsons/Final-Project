import React from "react";
import { StyleSheet, Text, View, Image, StatusBar, Button } from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import ScreenHeader from "../Components/ScreenHeader";
import { Container } from "native-base";

import { createCust } from '../Api.js';
import { STRIPE_PKEY } from 'react-native-dotenv';
import Stripe from 'react-native-stripe-api';

const client = new Stripe(STRIPE_PKEY);

let formData = null;

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
      formData = form;
      console.log("Form valid, ready to submit", formData);
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
    // Create a Stripe token with new card info & create a customer
    const token = client.createToken({
      number: formData.values.number,
      exp_month: formData.values.expiry.slice(0,2), 
      exp_year: formData.values.expiry.slice(3,5), 
      cvc: formData.values.cvc,
    }).then((response) => {
      console.log(response);
      return createCust(response.id);
    }).then((data) => {
      console.log('CUSTOMER SUCCESSFULLY CREATED', data.id);
    }).catch((e) => {
      console.log('ERROR', e);
    });
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
