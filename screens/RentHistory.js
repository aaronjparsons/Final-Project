import React from "react";
// import { StyleSheet, View, Image, StatusBar, Button } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body
} from "native-base";
import ScreenHeader from "../Components/ScreenHeader";
let orders = [
  {
    id: 1,
    duration: 60,
    address: "123 Fake Street",
    date: "Jan. 20th, 2018",
    price: 5
  },
  {
    id: 2,
    duration: 60,
    address: "123 Fake Street",
    date: "Jan. 20th, 2018",
    price: 2
  },
  {
    id: 3,
    duration: 120,
    address: "123 Fake Street",
    date: "Jan. 20th, 2018",
    price: 5
  },
  {
    id: 4,
    duration: 60,
    address: "123 Fake Street",
    date: "Jan. 20th, 2018",
    price: 5
  },
  {
    id: 5,
    duration: 60,
    address: "123 Fake Street",
    date: "Jan. 20th, 2018",
    price: 5
  }
];

export default class OrderHistory extends React.Component {
  orderTotal(duration, price) {
    return (duration / 60) * price;
  }

  render() {
    let orderHistory = orders.map(order => {
      return (
        <Card>
          <CardItem header bordered>
            <Text>Order # {order.id}</Text>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>
                Address: {order.address}
                {"\n"}
                Duration: {order.duration}
              </Text>
            </Body>
          </CardItem>
          <CardItem footer bordered>
            <Text>Price: ${this.orderTotal(order.duration, order.price)}</Text>
          </CardItem>
        </Card>
      );
    });

    return (
      <Container>
        <ScreenHeader navigation={this.props.navigation} />
        <Content padder>{orderHistory}</Content>
      </Container>
    );
  }
}
