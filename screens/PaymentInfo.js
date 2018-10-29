import React from "react";
import { StyleSheet, Text, View, Image, StatusBar, Button, Keyboard } from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import ScreenHeader from "../Components/ScreenHeader";
import { Container } from "native-base";

import { createCust } from '../Api.js';
import { STRIPE_PKEY } from 'react-native-dotenv';
import Stripe from 'react-native-stripe-api';
import firebase from '../Firebase.js';

const client = new Stripe(STRIPE_PKEY);

let formData = null;

export default class PaymentInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      submitButtonDisabled: true,
      keyboardUp: false
    };
    this.formOnChange = this.formOnChange.bind(this);
    this.submitPaymentInfo = this.submitPaymentInfo.bind(this);
    this._keyboardDidShow = this._keyboardDidShow.bind(this);
    this._keyboardDidHide = this._keyboardDidHide.bind(this);
  }

  _isMounted = false;
  userEmail = null;

  formOnChange(form) {
    if (this._isMounted) {
      if (form.valid === true) {
        formData = form;
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
      return createCust(response.id, this.userEmail);
    }).then((data) => {
      console.log('CUSTOMER SUCCESSFULLY CREATED', data.id);
      // Add customer id to user in database
      firebase.database().ref('users').once('value', (users) => {
        users.forEach((user) => {
          if (user.val().email === this.userEmail) {
            let userId = user.key;
            firebase.database().ref(`users/${userId}/stripe_id`).set(data.id);
          }
        });
      });
      // Alert user of success, then redirect back to dashboard
      if (this.state.keyboardUp) {
        Keyboard.dismiss();
      }
      alert('Credit card successfully added');
      this.props.navigation.navigate('Dashboard');
    }).catch((e) => {
      console.log('ERROR', e);
      alert(e);
    });
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    this._isMounted = true;
    this.userEmail = firebase.auth().currentUser.email;
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    this._isMounted = false;
  }

  _keyboardDidShow () {
    this.setState({
      keyboardUp: true
    })
  }

  _keyboardDidHide () {
    this.setState({
      keyboardUp: false
    })
  }

  render() {
    return (
      <Container>
        <ScreenHeader navigation={this.props.navigation} />
        <View>
          <CreditCardInput onChange={this.formOnChange} allowScroll={true} />
          <Button
            title={this.state.submitButtonDisabled ? "Enter A Valid Credit Card" : "Add Credit Card"}
            disabled={this.state.submitButtonDisabled}
            onPress={this.submitPaymentInfo}
          />
        </View>
      </Container>
    );
  }
}
