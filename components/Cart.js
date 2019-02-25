import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { H1, H2, H3, Text } from 'native-base';
const CartLine = (props) => {
  const { item, quantity } = props;
  return (
    <View>
      {item.name}
    </View>
  )
}
class Cart extends Component {
  render() {
    const { cart, total } = this.props;
    return (
      <View style={styles.cartContainer}>
        <View style={styles.titleContainer}>
          <H1>Your Cart</H1>
        </View>
        {
          (cart.items && cart.items.length)
          ? cart.items.map((line) => <CartLine item={line.item} quantity={line.quantity} /> )
          : <Text>No items in your cart</Text>
        }
        <View style={styles.totalsContainer}>
          <H3>Total: ${parseFloat(total).toFixed(2)}</H3>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  totalsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  }
})
export default Cart;