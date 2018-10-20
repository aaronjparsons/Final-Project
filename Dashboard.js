import React from 'react';
import { Text, View, Image, Button } from 'react-native';
import {  List, ListItem } from 'react-native-elements';
import styles from './styles.js'


export default class Dashboard extends React.Component {
  
  
  
  render() {
    
    
    const list = [
      {
        title: 'Order History',
        icon: 'receipt',
        navigate: 'OrderHistory'
      },
      {
        title: 'Rent History',
        icon: ''
      },
      {
        title: 'My Spots',
        icon: ''
      },
      {
        title: 'Add a spot',
        icon: ''
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
            <Text style={styles.name}>{this.props.user.first_name} {this.props.user.last_name}</Text>
            <Text style={styles.userInfo}>{this.props.user.email}</Text>
            <Text style={styles.userInfo}>{this.props.user.phone_number}</Text>
            <Text style={styles.userInfo}>License Plate: {this.props.user.license_plate}</Text>
            <Image style={styles.avatar}
                   source={{uri: 'https://png.icons8.com/office/40/000000/sedan.png'}}/>
            <Button
              style={styles.button}
              onPress={(e) => console.log('pressed')}
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
                // onPress={() => this.props.navigation.navigate({item.navigate})}
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
