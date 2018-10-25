import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Button,
  TextInput
} from "react-native";
import ScreenHeader from "../Components/ScreenHeader";
import { Container } from "native-base";
import MapView from 'react-native-maps';

export default class AddASpot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      marker: [],
    }
  }
  
  render() {
    return (
      <Container>
        <ScreenHeader navigation={this.props.navigation} />
        <View style={styles.body}>
          <View style={styles.headerContent}>
            <Text>Add a Parking Spot</Text>
          </View>
          <MapView
              style={styles.map}
              initialRegion={{
                latitude: 51.0478,
                longitude: -114.0593,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
              }}
              showsMyLocationButton={true}
              showsUserLocation={true}
              // onPress={this.removeCard}
            >
            <Marker
              coordinate={{latitude: 51.0478,
                longitude: -114.0593}}
                draggable
             />
            </MapView>
          <View style={styles.content}>
            <TextInput
              style={styles.inputField}
              onChangeText={text => this.setState({ input: text })}
              placeholder={"Address"}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={text => this.setState({ input: text })}
              placeholder={"Picture URL"}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={text => this.setState({ input: text })}
              placeholder={"Description"}
            />
            <TextInput
              style={styles.inputField}
              onChangeText={text => this.setState({ input: text })}
              placeholder={"Price"}
            />
          </View>
          <Button
            style={styles.button}
            onPress={e => console.log(e)}
            title="Save Changes"
            // color="blue"
            accessibilityLabel="Change User Profile"
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    height: 800,
    alignItems: "center"
  },
  inputField: {
    height: 40,
    width: 250,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
    padding: 5
  },
  button: {
    width: 300,
    color: "blue"
  },
  headerContent: {
    padding: 30,
    // fontSize: 10,
    alignItems: 'center',
  },
  map: {
    width: 300,
    height: 300,
    // flex: 1,
    // justifyContent: 'center'
  }
  // content: {
  //   flex:1,
  //   alignItems:'flex-start',
  //   paddingLeft:5
  // }
});
