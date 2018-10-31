import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Button,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Container,
  Dimensions
} from "react-native";
import MapView, { Marker } from "react-native-maps";
// import ImagePicker from 'react-native-image-crop-picker';
import { ImagePicker } from "expo";
import ScreenHeader from "../Components/ScreenHeader";
import firebase from "../Firebase.js";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API } from "react-native-dotenv";
// var googleMapsClient = createClient({
// key: GOOGLE_MAPS_API
// });

export default class AddASpot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: [],
      address: "",
      spot_id: "",
      location: { lat: 51.0478, lng: -114.0593 },
      picture_url: "",
      owner: "",
      description: "",
      price: 0,
      latitude: 0,
      longitude: 0,
      is_rented: false,
      image: null
    };

    this.addSpot = this.addSpot.bind(this);
    this.getSpot = this.getSpot.bind(this);
    this.parseAddress = this.parseAddress.bind(this);
    this.pickImage = this.pickImage.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }

  _isMounted = false;

  getSpot() {
    // console.log("We here")
    // getLocation(this.parseAddress(this.state.address));
    let spot = {
      id: this.state.spot_id,
      title: this.state.address,
      location: this.state.location,
      picture_url: this.state.image,
      description: this.state.description,
      price: this.state.price,
      owner: this.state.uid,
      is_rented: false
    };
    // console.log("THE SPOT IS ", spot)
    return spot;
  }

  getLocation(formattedAddress, locationObject) {
    this.setState({ address: formattedAddress, location: locationObject });
  }

  parseAddress(address) {
    var parsedAddress = address.split(" ").join("+");
    return parsedAddress;
  }

  addSpot(spot) {
    self = this;
    async function uploadImageAsync(uri, spot_id) {
      const response = await fetch(uri);
      const blob = await response.blob();
      const ref = firebase
        .storage()
        .ref()
        .child(`lot_images/${spot.owner}/${spot_id}/lot.jpg`);
      const snapshot = await ref.put(blob).then(() => {
        self.props.navigation.navigate("MySpots");
      });
    }
    if (this._isMounted) {
      firebase
        .database()
        .ref("spots")
        .push(spot)
        .then(data => {
          //success callback
          spot_id = data.path.pieces_[1];
          uploadImageAsync(this.state.image, spot_id);
          alert("Post Successful!");
        })
        .catch(error => {
          //error callback
          console.log("error ", error);
        });
    }
  }

  pickImage() {
    _pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });

      console.log(result);

      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    };

    _pickImage();
  }

  componentDidMount() {
    this._isMounted = true;
    // console.log('did mount', this._isMounted)
    this.setState({ uid: firebase.auth().currentUser.uid });
  }

  componentWillUnmount() {
    this._isMounted = false;
    // console.log(this._isMounted);
  }

  render() {
    return (
      <ScrollView>
        <ScreenHeader
          style={{ width: Dimensions.get("window").width }}
          navigation={this.props.navigation}
        />

        <KeyboardAvoidingView
          style={styles.body}
          behavior="padding"
          keyboardVerticalOffset={40}
        >
          <ScrollView
            style={{ width: Dimensions.get("window").width }}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <MapView
              region={{
                latitude: this.state.location.lat,
                longitude: this.state.location.lng,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001
              }}
              style={styles.map}
              initialRegion={{
                latitude: this.state.location.lat,
                longitude: this.state.location.lng,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
              }}
              showsMyLocationButton={true}
              showsUserLocation={true}
              // onPress={this.removeCard}
            >
              <Marker
                coordinate={{
                  latitude: this.state.location.lat,
                  longitude: this.state.location.lng
                }}
                draggable
              />
            </MapView>
            <GooglePlacesAutocomplete
              placeholder="Search"
              minLength={2} // minimum length of text to search
              autoFocus={false}
              returnKeyType={"done"} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
              listViewDisplayed="true" // true/false/undefined
              fetchDetails={true}
              renderDescription={row => row.description} // custom description render
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true

                this.getLocation(
                  details.formatted_address,
                  details.geometry.location
                );

                this.getLocation(
                  details.formatted_address,
                  details.geometry.location
                );
              }}
              getDefaultValue={() => ""}
              query={{
                // available options: https://developers.google.com/places/web-service/autocomplete
                key: GOOGLE_MAPS_API,
                establishment: "establishment",
                street_number: "short_name",
                route: "long_name",
                locality: "long_name",
                administrative_area_level_1: "short_name",
                country: "long_name",
                postal_code: "short_name"
              }}
              currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list
              currentLocationLabel="Current location"
              nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
              GoogleReverseGeocodingQuery={
                {
                  // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                }
              }
              GooglePlacesSearchQuery={{
                // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                rankby: "distance",
                types: "food"
              }}
              filterReverseGeocodingByTypes={[
                "locality",
                "administrative_area_level_3"
              ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
              debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
            />

            {this.state.image ? (
              <Image
                style={{
                  alignSelf: "center",
                  width: 128,
                  height: 128,
                  resizeMode: "contain"
                }}
                source={{ uri: this.state.image }}
              />
            ) : (
              <TouchableOpacity onPress={this.pickImage}>
                <Image
                  style={{ alignSelf: "center" }}
                  source={require("../assets/add_image.png")}
                />
              </TouchableOpacity>
            )}
          </ScrollView>
          <TextInput
            style={[styles.inputField, { height: 60 }]}
            returnKeyType="next"
            onChangeText={text => this.setState({ description: text })}
            placeholder={"Description"}
            underlineColorAndroid="transparent"
            onSubmitEditing={() => this.price.focus()}
            blurOnSubmit={false}
          />
          <TextInput
            keyboardType="numeric"
            style={styles.inputField}
            onChangeText={text => this.setState({ price: text })}
            placeholder={"Price"}
            underlineColorAndroid="transparent"
            ref={input => (this.price = input)}
          />
          <Button
            style={styles.button}
            onPress={() => {
              this.addSpot(this.getSpot());
            }}
            title="Save Changes"
            // color="blue"
            accessibilityLabel="Add a parking spot"
          />
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    height: Dimensions.get("window").height,
    alignItems: "center"
  },
  inputField: {
    height: 40,
    width: Dimensions.get("window").width * 0.8,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
    padding: 5,
    borderRadius: 15,
    borderColor: "#161D7D",
    fontSize: 15,
    alignItems: "flex-start"
  },
  button: {
    width: 300,
    color: "blue",
    elevation: 0
  },
  headerContent: {
    padding: 30,
    // fontSize: 10,
    alignItems: "center"
  },
  map: {
    marginTop: 80,
    width: Dimensions.get("window").width * 0.8,
    height: 300,
    margin: 10,
    padding: 5
    // flex: 1,
    // justifyContent: 'center'
  }
  // content: {
  //   flex:1,
  //   alignItems:'flex-start',
  //   paddingLeft:5
  // }
});
