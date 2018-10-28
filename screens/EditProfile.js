import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Container } from "native-base";
import ScreenHeader from "../Components/ScreenHeader";

import firebase from '../Firebase';

export default class EditProfile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      license_plate: "",
      car_size: "",
      password: "",
      address: ""
    }
  }

  updateUser(newUser) {
    console.log(newUser);
    let user = firebase.auth().currentUser;
    user.updateProfile({
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      address: newUser.address
    }).then(function() {
      console.log('Update successful')
      // navigate to dashboard
    }).catch(function() {
      console.log('error updating user')
    })
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
        <ScreenHeader navigation={this.props.navigation} />
        <View style={styles.body}>
          <View style={styles.headerContent}>
            <Text>Edit Profile</Text>
          </View>
          <View style={styles.content}>
            <TextInput
              style={styles.inputField}
              onChangeText={text => this.setState({ first_name: text })}
              placeholder={users.first_name}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={text => this.setState({ last_name: text })}
              placeholder={users.last_name}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={text => this.setState({ email: text })}
              placeholder={users.email}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={text => this.setState({ phone_number: text })}
              placeholder={users.phone_number}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={text => this.setState({ license_plate: text })}
              placeholder={users.license_plate}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={text => this.setState({ car_size: text })}
              placeholder={users.car_size}
            />
            <TextInput
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
