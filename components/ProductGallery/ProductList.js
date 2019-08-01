import React, { Component } from "react";
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Segment } from 'native-base';
import Loading from '../Loading';
import ProductCard from '../ProductCard';

export default class ProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      <List>
        {
          products.map((product) => (
            <ListItem key={product.id} thumbnail onPress={() => Actions.productDetails()}>
              <Left>
                <Thumbnail square source={product.thumbnail} />
              </Left>
              <Body>
                <Text>{product.name}</Text>
                <Text note numberOfLines={1}>{product.price}</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>More</Text>
                </Button>
              </Right>
            </ListItem>
          ))
        }
      </List>
    );
  }
}