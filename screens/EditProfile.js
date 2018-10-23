import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default class EditProfile extends React.Component {
  render() {
    let users = 
    {
      id: 1,
      first_name: 'Some',
      last_name: 'Guy',
      email: 'test@test.ca',
      phone_number: '403-111-1111',
      license_plate: 'BJW-1819',
      car_size: 'medium',
      password: 'something',
      address: '123 Fake St'
    }

    return (
      
        <View style={styles.body}>
          <View style={styles.headerContent}>
            <Text>Edit Profile</Text>
          </View>
          <View style={styles.content}>
            <TextInput
              style={styles.inputField}
              onChangeText={(text) => this.setState({input: text})}
              placeholder={users.first_name}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={(text) => this.setState({input: text})}
              placeholder={users.last_name}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={(text) => this.setState({input: text})}
              placeholder={users.email}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={(text) => this.setState({input: text})}
              placeholder={users.phone_number}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={(text) => this.setState({input: text})}
              placeholder={users.license_plate}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={(text) => this.setState({input: text})}
              placeholder={users.car_size}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={(text) => this.setState({input: text})}
              placeholder={users.address}
            />
          </View>
          <Button
            style={styles.button}
            onPress={(e) => console.log(e)}
            title="Save Changes"
            // color="blue"
            accessibilityLabel="Change User Profile"
          />
        </View>
      
    )
  }
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: "white",
    height:800,
    alignItems:'center',
  },
  inputField: {
    height: 40, 
    width: 250, 
    borderColor: 'black', 
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
    padding: 5
  },
  button: {
    width: 300,
    color: 'blue',
  },
  headerContent:{
    padding:30,
    // fontSize: 10,
    alignItems: 'center',
  },
  // content: {
  //   flex:1,
  //   alignItems:'flex-start',
  //   paddingLeft:5
  // }
})