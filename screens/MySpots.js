import React from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import { Image, StyleSheet, Button }  from 'react-native';
import ScreenHeader from "../Components/ScreenHeader";

import firebase from '../Firebase.js';

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
