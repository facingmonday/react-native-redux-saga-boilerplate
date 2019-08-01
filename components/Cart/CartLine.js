import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SwipeRow, Button, Icon } from 'native-base';
import { H1, H2, H3, Text } from '../Typography';

const CartLine = (props) => {
  const { item, quantity, add, remove } = props;
  return (
    <SwipeRow
      leftOpenValue={75}
      rightOpenValue={-75}
      left={
        <Button success onPress={() => add(item.id)}>
          <Icon active name="add" />
        </Button>
      }
      body={
        <View style={styles.cartLine}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={item.thumbnail} /> 
          </View>
          <View style={styles.nameContainer}>
            <Text>{item.name}</Text>
          </View>
          <View style={styles.quantityContainer}>
            <Text>{item.quantity}</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text>${item.total}</Text>
          </View>
        </View>
      }
      right={
        <Button danger onPress={() => remove(item.id)}>
          <Icon active name="trash" />
        </Button>
      }
    />
  )
}
const styles = StyleSheet.create({
  cartLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1
  },
  image: {
    width: 50,
    height: 50,
  },
  nameContainer: {
    flex: 3
  },
  quantityContainer: {
    flex: 1
  },
  totalContainer: {
    flex: 1
  }
})
export default CartLine;