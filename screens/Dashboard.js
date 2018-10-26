import React from "react";
import { Text, View, Image, Button } from "react-native";
import { List, ListItem } from "react-native-elements";
import { Container } from "native-base";
import HeaderNavigation from "../Components/HeaderNavigation.js";
import styles from "../config/styles.js";

// import firebase from '../Firebase.js';
// import { API_KEY, AUTH_DOMAIN,DATABASE_URL, PROJECT_ID,STORAGE_BUCKET, MESSAGING_SENDER_ID } from 'react-native-dotenv'

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
 
    // console.log(firebase.apps.length);

    // console.log(firebase.auth());
  }

  render() {
    
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
                {this.props.user.first_name} {this.props.user.last_name}
              </Text>
              <Text style={styles.userInfo}>{this.props.user.email}</Text>
              <Text style={styles.userInfo}>{this.props.user.phone_number}</Text>
              <Text style={styles.userInfo}>
                License Plate: {this.props.user.license_plate}
              </Text>
              <Image style={styles.avatar} source={{uri: this.vehicleSize(this.props.user.car_size)}} />
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
