import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Button } from 'react-native';



export default class Dashboard extends React.Component {

  

  render() {
    
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
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{uri: 'https://png.icons8.com/home/win8/50/ffffff'}}/>
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Home</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{uri: 'https://png.icons8.com/settings/win8/50/ffffff'}}/>
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Your Spots</Text>
            </View>
          </View>

            <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{uri: 'https://png.icons8.com/color/50/000000/purchase-order.png'}}/>
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Order History</Text>
            </View>
          </View>

          <View style={styles.bottom_button}>
            <Button
              onPress={(e) => console.log('pressed')}
              title="Add a Spot"
              color="blue"
              accessibilityLabel="Add a spot to rent"
            />
          </View>          
        </View>
      </View>
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
    bottom: 0,
  }
});
