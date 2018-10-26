import React from "react";
// import { StyleSheet, View, Image, StatusBar, Button } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import { Image, StyleSheet, Button }  from 'react-native';
import ScreenHeader from "../Components/ScreenHeader";

import firebase from '../Firebase.js';

// let spots = [
//   {
//     id: 1,
//     address: "123 Fake Street",
//     description: "Regular street parking spot.",
//     date_added: "Jan. 20th, 2018",
//     picture_url: require("../assets/spot.jpg"),
//     price: 5
//   },
//   {
//     id: 2,
//     address: "123 Fake Street",
//     description: "Regular street parking spot.",
//     date_added: "Jan. 20th, 2018",
//     picture_url: require("../assets/spot.jpg"),
//     price: 2
//   },
//   {
//     id: 3,
//     address: "123 Fake Street",
//     description: "Regular street parking spot.",
//     date_added: "Jan. 20th, 2018",
//     picture_url: require("../assets/spot.jpg"),
//     price: 3
//   }
// ];

export default class MySpots extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      spots: []
    }
  }

  componentDidMount() {
    firebase.database().ref('/spots/').on(('value'), (data) => {
      let spots = [];
      // grab spot data from db
      data.forEach((spot) => {
        let newSpot = spot.val();
        newSpot.key = spot.key;
        spots.push(newSpot);
      });
      this.setState({spots: spots});
    })
  }
  
  render() {
    // this.state.spots.length
    let id = 0;
    let mySpots = this.state.spots.map(spot => {
      id++;
      return (
        <Card key={spot.key}>
          <CardItem header bordered>
            <Text>Parking Spot Id # {id}</Text>
          </CardItem>
          <CardItem bordered>
            {spot.picture_url ? <Image style={styles.picture} source={spot.picture_url} /> : <Image style={styles.picture} source={require("../assets/spot.jpg")} />}
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
