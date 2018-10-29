import React from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import ScreenHeader from "../Components/ScreenHeader";

import firebase from '../Firebase';

export default class OrderHistory extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
    firebase;
  }

  orderTotal(duration, price) {
    return (duration / 60) * price;
  }
  
  componentDidMount() {
    let user_email = firebase.auth().currentUser.email;

    firebase.database().ref('/orders/').on(('value'), (data) => {
      let orders = [];
      data.forEach((order) => {
        if (user_email === order.val().rent_user) {
          let newOrder = order.val();
          newOrder.key = order.key;
          orders.push(newOrder);
        }
  
      });
      this.setState({orders: orders});
    })
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
