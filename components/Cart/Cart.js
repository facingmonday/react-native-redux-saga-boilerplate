import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { H1, H2, H3, Text } from '../Typography';

import CartLine from './CartLine';

class Cart extends Component {
  render() {
    const { cart } = this.props;
    return (
      <View style={styles.cartContainer}>
        <View style={styles.titleContainer}>
          <H1>Your Cart</H1>
        </View>
        {
          (cart.items && cart.items.length)
          ? cart.items.map((line) => <CartLine item={{...line}} quantity={line.quantity} add={() => null} remove={() => null} /> )
          : <Text>No items in your cart</Text>
        }
        <View style={styles.totalsContainer}>
          <H3>Total: ${parseFloat(cart.total).toFixed(2)}</H3>
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