import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Button,
  Icon
} from "native-base";
import ScreenHeader from "../Components/ScreenHeader";

export default class Help extends React.Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Text
            onPress={() => this.props.navigation.navigate("Home")}
            style={styles.parker}
          >
            Peter Parker
          </Text>
          <Button
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Icon style={styles.icon} name="ios-arrow-back" />
          </Button>
        </Header>
        <Content>
          <Text style={styles.title}>Help /FAQ</Text>
          <Card>
            <CardItem>
              <Body>
                <Text>Q: How long can I park here?</Text>
                <Text>
                  A: As long as you want! Don't forget to stop the meter when
                  you are done parking.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>Q: How long can I park here?</Text>
                <Text>
                  A: As long as you want! Don't forget to stop the meter when
                  you are done parking.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>Q: How long can I park here?</Text>
                <Text>
                  A: As long as you want! Don't forget to stop the meter when
                  you are done parking.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>Q: How long can I park here?</Text>
                <Text>
                  A: As long as you want! Don't forget to stop the meter when
                  you are done parking.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>Q: How long can I park here?</Text>
                <Text>
                  A: As long as you want! Don't forget to stop the meter when
                  you are done parking.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>Q: How long can I park here?</Text>
                <Text>
                  A: As long as you want! Don't forget to stop the meter when
                  you are done parking.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    textAlign: "center",
    padding: 4
  },
  header: {
    height: 75
  },
  button: {
    position: "absolute",
    left: 0,
    marginTop: 20,
    paddingBottom: 20,
    paddingTop: 0
  },
  parker: {
    color: "white",
    fontSize: 30,
    fontStyle: "italic",
    marginTop: 20
  },
  icon: {
    marginTop: 20
  }
});
