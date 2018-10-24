import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, Button, TextInput } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';

export default class Help extends React.Component {
  
  render() {
    return (
      
        <Container>
        <Header />
          <Content>
            <Text style={styles.title}>Help /FAQ</Text>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    Q: How long can I park here?
                  </Text>
                  <Text>
                    A: As long as you want! Don't forget to stop the meter when you are done parking.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    Q: How long can I park here?
                  </Text>
                  <Text>
                    A: As long as you want! Don't forget to stop the meter when you are done parking.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    Q: How long can I park here?
                  </Text>
                  <Text>
                    A: As long as you want! Don't forget to stop the meter when you are done parking.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    Q: How long can I park here?
                  </Text>
                  <Text>
                    A: As long as you want! Don't forget to stop the meter when you are done parking.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    Q: How long can I park here?
                  </Text>
                  <Text>
                    A: As long as you want! Don't forget to stop the meter when you are done parking.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    Q: How long can I park here?
                  </Text>
                  <Text>
                    A: As long as you want! Don't forget to stop the meter when you are done parking.
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Container>
      
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4
  }
})