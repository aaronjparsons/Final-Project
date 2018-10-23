import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Button } from 'react-native';
import { CreditCardInput } from "react-native-credit-card-input";

export default class PaymentInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      submitButtonDisabled: true,
    }
    this.formOnChange = this.formOnChange.bind(this);
  }

  formOnChange(form) {
    if (form.valid === true) {
      console.log('Form valid, ready to submit');
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
    console.log('Card added');
  }

  render() {

    return (
      <View>
        <CreditCardInput 
        onChange={this.formOnChange} 
        allowScroll={true}
        />
        <Button title='Add Credit Card' disabled={this.state.submitButtonDisabled} onPress={this.submitPaymentInfo}></Button>
      </View>
    );
  }
}
