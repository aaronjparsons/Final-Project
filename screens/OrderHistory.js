import React from "react";
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

import firebase from "../Firebase";

export default class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
    firebase;
  }

  orderTotal(duration, price) {
    return (duration / 60) * price;
  }

  componentDidMount() {
    let uid = firebase.auth().currentUser.uid;

    firebase
      .database()
      .ref("/orders/")
      .on("value", data => {
        let orders = [];
        data.forEach(order => {
          // finds data for user
          if (uid === order.val().renter) {
            let newOrder = order.val();
            newOrder.key = order.key;
            orders.push(newOrder);
          }
        });
        this.setState({ orders: orders });
      });
  }

  render() {
    let id = 0;
    let orderHistory = this.state.orders.map(order => {
      id++;
      return (
        <Card key={order.key}>
          <CardItem header bordered>
            <Text>Order # {id}</Text>
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
            <Text>Total: ${order.totalPayed / 100.0}</Text>
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
