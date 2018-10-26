import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

class StatusCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.popup}>
        <Text style={styles.popupPrice}>Current Parking Session</Text>
        <Text>X Minutes Parked</Text>
        {this.props.info.info.map((desc, index) => {
          return (
            <Text key={index} style={styles.info}>
              {desc}
            </Text>
          );
        })}
        <Button
          title="CHECKOUT"
          onPress={() => console.log("CHECKOUT PRESSED")}
        />
      </View>
    );
  }
}

export default StatusCard;

const styles = StyleSheet.create({
  popup: {
    display: "flex",
    alignItems: "center",
    padding: 20
  },
  popupPrice: {
    fontSize: 42,
    fontWeight: "bold",
    marginBottom: 20
  },
  info: {
    marginBottom: 10
  }
});
