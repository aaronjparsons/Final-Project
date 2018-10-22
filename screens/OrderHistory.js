import React from 'react';
import { StyleSheet, View, Image, StatusBar, Button } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';

let orders = [
  {
    id: 1,
    duration: 60,
    address: '123 Fake Street',
    date: 'Jan. 20th, 2018',
    price: 5
  },
  {
    id: 2,
    duration: 60,
    address: '123 Fake Street',
    date: 'Jan. 20th, 2018',
    price: 5
  },
  {
    id: 3,
    duration: 60,
    address: '123 Fake Street',
    date: 'Jan. 20th, 2018',
    price: 5
  },
  {
    id: 4,
    duration: 60,
    address: '123 Fake Street',
    date: 'Jan. 20th, 2018',
    price: 5
  },
  {
    id: 5,
    duration: 60,
    address: '123 Fake Street',
    date: 'Jan. 20th, 2018',
    price: 5
  }
]

export default class OrderHistory extends React.Component {
  render() {
    let orderHistory = orders.map((order) => {
      return(
        <Card>
          <CardItem header bordered>
            <Text>Order # {order.id}</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>
                Address: {order.address}{'\n'}
                Duration: {order.duration}
              </Text>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Text>Price: ${order.price / 1.00}</Text>
          </CardItem>
        </Card>
      )
    });

    return (
      <Container>
        <Header />
        <Content padder>
          {orderHistory}
        </Content>
      </Container>
    );
  }
}
