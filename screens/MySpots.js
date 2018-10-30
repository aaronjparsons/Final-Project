import React from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import { Image, StyleSheet, Button,View,ActivityIndicator }  from 'react-native';
import ScreenHeader from "../Components/ScreenHeader";

import firebase from '../Firebase.js';

export default class MySpots extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      spots: [],
      renderedSpots:[],
      image_url:null,
      
    }
    firebase;
    storageRef = firebase.storage().ref()
    this.test_image_url = null;
    this.counter = 0;
  }

  componentDidMount() {
   
    let user_email = firebase.auth().currentUser.email;

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
    // firebase.database().ref.off();
  }
  
  
  render() {
    self = this;
    let id = 0;
    let mySpots = this.state.spots.map(spot => {
      var lotImageRef = storageRef.child(`lot_images/${firebase.auth().currentUser.uid}/${spot.key}/lot.jpg`);
      lotImageRef.getDownloadURL().then((url) =>{
        self.test_image_url = url;
        self.counter+=1;
        id++;
        cardToPush =(
          <Card key={spot.key}>
            <CardItem header bordered>
              <Text>Spot: {id}</Text>
            </CardItem>
            <CardItem bordered>
              {self.test_image_url ? <Image style={styles.picture} source={{uri:self.test_image_url}} /> : <Image style={styles.picture} source={require("../assets/spot.jpg")} />}
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
                  onPress={() => self.props.navigation.navigate('AddASpot')}
                  title="Edit Spot"
                  color="blue"
                  accessibilityLabel="Edit Parking Spot"
                />
          </Card>)
          if(self.counter <= self.state.spots.length ) {
            self.setState(prevState=>({
              renderedSpots : [...prevState.renderedSpots, cardToPush]
            }))
          }

        
      })
    });

    return (
      <Container>
        <ScreenHeader navigation={this.props.navigation} />
        <Content padder>{this.state.renderedSpots}</Content>
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
