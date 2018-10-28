import React from "react";
import { Text, View, Image, Button, StyleSheet } from "react-native";
import { List, ListItem } from "react-native-elements";
import { Container } from "native-base";
import HeaderNavigation from "../Components/HeaderNavigation.js";

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

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    // borderRadius: 63,
    // borderWidth: 4,
    // borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "#778899",
    height:500,
    // alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  },
  bottom_button:{
    position: 'absolute',
    backgroundColor: 'red',
    width: '100%',
    marginTop: 290,
    // bottom: 0,
  },
  map: {
    // ...StyleSheet.absoluteFillObject,
    marginTop: 65
  },
});
