import React from "react";
import { StyleSheet, Text, View, Image, StatusBar, Button } from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";
import ScreenHeader from "../Components/ScreenHeader";
import { Container } from "native-base";

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
    console.log("Card added");
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
