import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  KeyboardAvoidingView
} from "react-native";
import { Container } from "native-base";
import ScreenHeader from "../Components/ScreenHeader";

import firebase from "../Firebase";

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      license_plate: "",
      car_size: "",
      password: "",
      address: ""
    };
  }

  updateUser(newUser) {
    console.log(newUser);
    let user = firebase.auth().currentUser;
    user
      .updateProfile({
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        address: newUser.address
      })
      .then(function() {
        console.log("Update successful");
        // navigate to dashboard
      })
      .catch(function() {
        console.log("error updating user");
      });
  }

  componentDidMount() {
    // console.log(firebase.auth().currentUser.email);
    // console.log(this.state);
  }

  render() {
    let users = {
      id: 1,
      first_name: "Some",
      last_name: "Guy",
      email: "test@test.ca",
      phone_number: "403-111-1111",
      license_plate: "BJW-1819",
      car_size: "medium",
      password: "something",
      address: "123 Fake St"
    };

    return (
      <Container>
        <KeyboardAvoidingView behavior="padding">
          <ScreenHeader navigation={this.props.navigation} />
          <View style={styles.body}>
            <View style={styles.headerContent}>
              <Text>Edit Profile</Text>
            </View>
            <View style={styles.content}>
              <TextInput
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.last_name.focus();
                }}
                blurOnSubmit={false}
                style={styles.inputField}
                onChangeText={text => this.setState({ first_name: text })}
                placeholder={users.first_name}
              />
              <TextInput
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.email.focus();
                }}
                blurOnSubmit={false}
                ref={input => {
                  this.last_name = input;
                }}
                style={styles.inputField}
                onChangeText={text => this.setState({ last_name: text })}
                placeholder={users.last_name}
              />
              <TextInput
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.phone_number.focus();
                }}
                blurOnSubmit={false}
                ref={input => {
                  this.email = input;
                }}
                style={styles.inputField}
                onChangeText={text => this.setState({ email: text })}
                placeholder={users.email}
              />
              <TextInput
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.license_plate.focus();
                }}
                blurOnSubmit={false}
                ref={input => {
                  this.phone_number = input;
                }}
                style={styles.inputField}
                onChangeText={text => this.setState({ phone_number: text })}
                placeholder={users.phone_number}
              />
              <TextInput
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.car_size.focus();
                }}
                blurOnSubmit={false}
                ref={input => {
                  this.license_plate = input;
                }}
                style={styles.inputField}
                onChangeText={text => this.setState({ license_plate: text })}
                placeholder={users.license_plate}
              />
              <TextInput
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.address.focus();
                }}
                blurOnSubmit={false}
                ref={input => {
                  this.car_size = input;
                }}
                style={styles.inputField}
                onChangeText={text => this.setState({ car_size: text })}
                placeholder={users.car_size}
              />
              <TextInput
                returnKeyType={"go"}
                blurOnSubmit={true}
                ref={input => {
                  this.address = input;
                }}
                style={styles.inputField}
                onChangeText={text => this.setState({ address: text })}
                placeholder={users.address}
              />
            </View>
            <Button
              style={styles.button}
              onPress={() => this.updateUser(this.state)}
              title="Save Changes"
              // color="blue"
              accessibilityLabel="Change User Profile"
            />
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    height: 800,
    alignItems: "center"
  },
  inputField: {
    height: 40,
    width: 250,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
    padding: 5
  },
  button: {
    width: 300,
    color: "blue"
  },
  headerContent: {
    padding: 30,
    // fontSize: 10,
    alignItems: "center"
  }
  // content: {
  //   flex:1,
  //   alignItems:'flex-start',
  //   paddingLeft:5
  // }
});
