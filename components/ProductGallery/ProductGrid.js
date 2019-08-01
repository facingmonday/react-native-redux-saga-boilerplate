import React, { Component } from "react";
import { View, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Segment } from 'native-base';
import Loading from '../Loading';
import ProductCard from '../ProductCard';

class ProductGrid extends Component {
  render() {
    const { products } = this.props;

    return (
      <View style={styles.container}>
        {
          products.map((product) => (
            <View key={product.id} style={styles.item} onPress={() => Actions.productDetails()}>
              <Image style={styles.image} square source={product.thumbnail} />
              <Text>{product.name}</Text>
              <Text note numberOfLines={1}>{product.price}</Text>
              <Button transparent>
                <Text>More</Text>
              </Button>
            </View>
          ))
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: '50%',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: 120
  }
})

export default ProductGrid;