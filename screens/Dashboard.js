import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import {  List, ListItem } from 'react-native-elements';
import styles from '../config/styles.js'


export default class Dashboard extends React.Component {
  
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
      }
    
    const list = [
      {
        title: 'Order History',
        icon: 'receipt',
        navigate: 'OrderHistory'
      },
      {
        title: 'Rent History',
        icon: '',
        navigate: 'RentHistory'
      },
      {
        title: 'My Spots',
        icon: '',
        navigate: 'MySpots'
      },
      {
        title: 'Add a spot',
        icon: '',
        navigate: 'AddASpot'
      },
      
    ]
    // vehicleSize(size) {
    //   switch (size) {
    //     case 'small':
    //       <Image style={styles.icon} source={{uri: ''}} />
    //       break;
    //     case 'medium':
    //       <Image style={styles.icon} source={{uri: ''}} />
    //       break;
    //     case 'large':
    //       <Image style={styles.icon} source={{uri: ''}} />
    //       break;
    //     default:
    //       <Image style={styles.icon} source={{uri: ''}} />
    //   };
    // }


    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.name}>{users.first_name} {users.last_name}</Text>
            <Text style={styles.userInfo}>{users.email}</Text>
            <Text style={styles.userInfo}>{users.phone_number}</Text>
            <Text style={styles.userInfo}>License Plate: {users.license_plate}</Text>
            <Image style={styles.avatar}
                   source={{uri: 'https://png.icons8.com/office/40/000000/sedan.png'}}/>
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
            {
              list.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                onPress={() => this.props.navigation.navigate(item.navigate)}
                // leftIcon={{name: item.icon}}
              />
              ))
            }
          </List>  
        </View> 
      </View>
    );
  }
}
