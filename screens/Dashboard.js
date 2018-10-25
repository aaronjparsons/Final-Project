import React from "react";
import { Text, View, Image, Button } from "react-native";
import { List, ListItem } from "react-native-elements";
import styles from "../config/styles.js";
import HeaderNavigation from "../Components/HeaderNavigation.js";
import { Container } from "native-base";

import firebase from '../Firebase.js';

export default class Dashboard extends React.Component {
  
  vehicleSize(size) {
    switch (size) {
      case 'small':
        return 'https://png.icons8.com/nolan/40/000000/motorcycle.png';
      case 'medium':
        return 'https://png.icons8.com/office/40/000000/sedan.png';
      case 'large':
        return 'https://png.icons8.com/nolan/40/000000/truck.png';
      default:
        return 'https://png.icons8.com/office/40/000000/sedan.png';
    }
  }

  componentDidMount() {
    console.log(firebase.auth());
  }

  render() {
    
    let users = 
      {
        id: 1,
        first_name: 'Some',
        last_name: 'Guy',
        email: 'test@test.ca',
        phone_number: '403-111-1111',
        license_plate: 'BJW-1819',
        car_size: 'small',
        password: 'something',
      }
    
    const list = [
      {
        title: "Order History",
        icon: "",
        navigate: "OrderHistory"
      },
      {
        title: "Rent History",
        icon: "",
        navigate: "RentHistory"
      },
      {
        title: "My Spots",
        icon: "",
        navigate: "MySpots"
      },
      {
        title: 'Add a spot',
        icon: '',
        navigate: 'AddASpot'
      },
      {
        title: 'Payment Info',
        icon: '',
        navigate: 'PaymentInfo'
      }
      
    ]

    return (
      <Container>
        <HeaderNavigation navigation={this.props.navigation} />
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
              <Text style={styles.name}>
                {users.first_name} {users.last_name}
              </Text>
              <Text style={styles.userInfo}>{users.email}</Text>
              <Text style={styles.userInfo}>{users.phone_number}</Text>
              <Text style={styles.userInfo}>
                License Plate: {users.license_plate}
              </Text>
              <Image style={styles.avatar} source={{uri: this.vehicleSize(users.car_size)}} />
              <Button
                style={styles.button}
                onPress={() => this.props.navigation.navigate('EditProfile')}
                title="Edit Profile"
                color="blue"
                accessibilityLabel="Change User Profile"
              />
            </View>
          </View>

          <View style={styles.body}>
            <List>
              {list.map(item => (
                <ListItem
                  key={item.title}
                  title={item.title}
                  onPress={() => this.props.navigation.navigate(item.navigate)}
                  // leftIcon={{name: item.icon}}
                />
              ))}
            </List>
          </View>
        </View>
      </Container>
    );
  }
}
