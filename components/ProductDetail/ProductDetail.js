import React from "react";
import { View, StyleSheet, Image } from 'react-native';
import { Card, CardItem, Body, Thumbnail, Left, Text } from "native-base";
import { H2, H4 } from '../Typography';
import Button from '../Button';

const ProductDetail = (props) => {
  const { id, thumbnail, image, price, name, description } = props;
  return (
    <View key={id} style={styles.item} onPress={() => Actions.productDetails()}>
      <Image style={styles.image} square source={thumbnail} />
      <View style={styles.titleContainer}>
        <H2>{name}</H2>
      </View>
      <View style={styles.descriptionContainer}>
        <Text>{description}</Text>
      </View>
      <View style={styles.priceContainer}>
        <H2>{price}</H2>
      </View>
      <View style={styles.addToCartButton}>
        <Button rounded label={'Add To Cart'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    maxHeight: 300,
  },
  titleContainer: {
    margin: 10,
  },
  descriptionContainer: {
    margin: 10
  },
  priceContainer: {
    justifyContent: 'flex-end',
    margin: 10
  },
  addToCartButton: {
    margin: 20,
  }
})

export default ProductDetail;
