import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import PopupDialog, { SlideAnimation } from "react-native-popup-dialog";
import InfoCard from "../Components/InfoCard";
import HeaderNavigation from "../Components/HeaderNavigation.js";
import { Container } from "native-base";
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [
        {
          id: 1,
          latitude: 51.0478,
          longitude: -114.0593,
          title: "title",
          description: "description",
          price: 1.0
        },
        {
          id: 2,
          latitude: 51.0278,
          longitude: -114.0493,
          title: "title",
          description: "description",
          price: 2.0
        },
        {
          id: 3,
          latitude: 51.0538,
          longitude: -114.0123,
          title: "title",
          description: "description",
          price: 1.25
        },
        {
          id: 4,
          latitude: 51.0522,
          longitude: -114.0519,
          title: "title",
          description: "description",
          price: 1.75
        }
      ],
      cardPressed: false,
      parkPressed: false,
      spotInfo: {
        price: 1.25,
        info: ["Plug available", "12345 12 Street"]
      }
    };
    this.markerPressed = this.markerPressed.bind(this);
  }

  showCard(data) {
    this.state.markers.find(marker => {
      if (data.id === marker.id) {
        this.setState({
          spotInfo: {
            price: marker.price,
            info: ["Plug available", "12345 12 Street"]
          }
        });
      }
    });
  }

  markerPressed(data) {
    this.popupDialog.show();
  }

  parkPressed() {
    console.log("park pressed");
  }

  render() {
    const slideAnimation = new SlideAnimation({
      slideFrom: "top"
    });

    return (
      <Container>
        <HeaderNavigation navigation={this.props.navigation} />
        <View style={{ width: "100%", height: "100%" }}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 51.0478,
              longitude: -114.0593,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1
            }}
            showsUserLocation={true}
            onPress={this.removeCard}
          >
            {this.state.markers.map(marker => {
              return (
                <Marker
                  key={marker.id}
                  coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude
                  }}
                  onPress={() => this.markerPressed(marker)}
                />
              );
            })}
          </MapView>

          <View style={styles.popupContainer}>
            <PopupDialog
              ref={popupDialog => {
                this.popupDialog = popupDialog;
              }}
              dialogAnimation={slideAnimation}
              dialogStyle={styles.dialog}
            >
              <InfoCard
                info={this.state.spotInfo}
                parkPressed={this.parkPressed}
              />
            </PopupDialog>
          </View>
        </View>
      </Container>
    );
  }
}

export default Map;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  popupContainer: {
    height: "100%",
    width: "100%"
  },
  dialog: {
    position: "absolute",
    top: "4%",
    width: "90%",
    height: "38%"
  }
});
