import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import InfoCard from './InfoCard';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardPressed: false,
      parkPressed: false,
      spotInfo: {
        price: 1.25,
        info: ['Plug available', '12345 12 Street']
      }
    }
    this.markerPressed = this.markerPressed.bind(this);
  }

  showCard(data) {
    this.props.markers.find((marker) => {
      if (data.id === marker.id) {
        this.setState({
          spotInfo: {
            price: marker.price,
            info: ['Plug available', '12345 12 Street']
          }
        });
      }
    });
  }

  markerPressed(data) {
    this.popupDialog.show()
  }

  parkPressed() {
    console.log('park pressed');
  }

  render() {
    const slideAnimation = new SlideAnimation({
      slideFrom: 'top',
    });

    return (
      <View style={{width: '100%', height: '100%'}}>
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
        {this.props.markers.map(marker => {
          return (
            <Marker
              key={marker.id}
              coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
              onPress={() => this.markerPressed(marker)}
            />
          );
        })}
        </MapView>

        <View style={styles.popupContainer}>
          <PopupDialog 
            ref={(popupDialog) => { this.popupDialog = popupDialog; }} 
            dialogAnimation={slideAnimation} 
            dialogStyle={styles.dialog}>
            <InfoCard info={this.state.spotInfo} parkPressed={this.parkPressed}/>
          </PopupDialog>
        </View>
      
      </View>
    );
  }
}

export default Map;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  popupContainer: {
    height: '100%',
    width: '100%',
  },
  dialog: {
    position: 'absolute', 
    top: '4%', 
    width: '90%', 
    height: '38%'
  },
});