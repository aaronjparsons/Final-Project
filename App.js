import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

import Map from './Map'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: [],
    }
    this.socket = new WebSocket("ws://172.16.203.34:8000/");
  }

  componentDidMount() {
    this.socket.onopen = (event) => {
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      this.setState({markers: data});
    }
  }

  render() {
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'PETER PARKER', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Map markers={this.state.markers} />
      </View>
    );
  }
}
