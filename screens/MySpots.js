import React from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import { Image, StyleSheet, Button }  from 'react-native';
import ScreenHeader from "../Components/ScreenHeader";

import firebase from '../Firebase.js';

export default class MySpots extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      spots: [],
      image_url:null
    }
    firebase;
    storageRef = firebase.storage().ref()
    var starsRef = storageRef.child(`lot_images/${firebase.auth().currentUser.uid}/lot.jpg`);

    
    starsRef.getDownloadURL().then((url) =>{
    this.setState({image_url:url})
    console.log("URL : " , this.state.image_url)
    })
  }

  componentDidMount() {
    let user_email = firebase.auth().currentUser.email;
    // console.log(user_email);

    firebase.database().ref('/spots/').on(('value'), (data) => {
      let spots = [];
      data.forEach((spot) => {
        if (user_email === spot.val().user) {
          let newSpot = spot.val();
          newSpot.key = spot.key;
          spots.push(newSpot);
        }
      });
      this.setState({spots: spots});
    })
  }

  componentWillUnmount() { 
    firebase.database().ref.off();
  }
  
  render() {
    
    let id = 0;
    let mySpots = this.state.spots.map(spot => {
      id++;
      return (
        <Card key={spot.key}>
          <CardItem header bordered>
            <Text>Parking Spot Id # {id}</Text>
          </CardItem>
          <CardItem bordered>
            {this.state.image_url ? <Image style={styles.picture} source={{uri:this.state.image_url}} /> : <Image style={styles.picture} source={require("../assets/spot.jpg")} />}
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>
                Address: {spot.address}
                {"\n"}
                Description: {spot.description}
              </Text>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Text>Price: ${spot.price}/hr</Text>
          </CardItem>
          <Button
                // style={styles.button}
                onPress={() => this.props.navigation.navigate('AddASpot')}
                title="Edit Spot"
                color="blue"
                accessibilityLabel="Edit Parking Spot"
              />
        </Card>
      );
    });

    return (
      <Container>
        <ScreenHeader navigation={this.props.navigation} />
        <Content padder>{mySpots}</Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    flexDirection: 'column',
    width: 100,
    height: 100,
    justifyContent: 'flex-end'
  }
});
