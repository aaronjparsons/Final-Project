import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  ScrollView
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Button,
  Icon,
  Title
} from "native-base";
import ScreenHeader from "../Components/ScreenHeader";
import email from "react-native-email";

export default class Help extends React.Component {
  handleEmail = () => {
    const to = "reportparking@gmail.com";
    email(to, { subject: "Issue With Pete Parker App" }).catch(console.error);
  };

  render() {
    return (
      <ScrollView style={styles.scrollview}>
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
                  <Text>
                    Q: I'm experinceing technical issues with Peter Parker?
                  </Text>
                  <Text onPress={this.handleEmail}>
                    A: Please email our support team.
                  </Text>
                  <Text onPress={this.handleEmail} style={styles.email}>
                    reportparking@gmail.com
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>Q: Is Peter Parker only available in Calgary?</Text>
                  <Text>
                    A: Peter Parker can be used across North America but most
                    support is currently located in Calgary. As of December 2018
                    Peter Parker has plans to expand its support to
                    Saskatchewan, Edmonton and Vancouver.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>Q: Is there a desktop version of Peter Parker?</Text>
                  <Text>
                    A: No, at the moment Peter Parker is only availble through
                    the app on Apple or Android devices.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>Q: How do I park with Peter Parker?</Text>
                  <Text>
                    A: Peter Parker is a real time App so treat it just like a
                    normal meter spot. We currently cannot reserve spots, using
                    the map view locate a sport with a green pin, make sure the
                    spot can fit your car and press confirm to start your
                    parking session.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>Q: Why are there no spots where I want to park?</Text>
                  <Text>
                    A: Peter Parker relies on people in the community to provide
                    access to there private parking spots. So please tell your
                    friends and community members about our App.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>Q: Can I reserve a parking spot?</Text>
                  <Text>
                    A: No this feature is currently unavailable, but with Peter
                    Parker having such low prices you can book a spot and start
                    paying before you arrive.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    Q: Is there a minimum amount of time to book a parking spot?
                  </Text>
                  <Text>
                    A: There is no minimum time to park however, there is a
                    minimum 50¢ charge.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>Q: Can I report bad behaviour?</Text>
                  <Text onPress={this.handleEmail}>
                    A: Yes you can report any user by emailing our support team
                  </Text>
                  <Text onPress={this.handleEmail} style={styles.email}>
                    reportparking@gmail.com
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text onPress={() => this.props.navigation.navigate("Home")}>
                    Back to Home
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </ScrollView>
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
  },
  scrollview: {
    flex: 1
  },
  email: {
    color: "#3366BB"
  }
});
