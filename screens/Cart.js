import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Container, Content, Item, Input } from 'native-base';
import {
  selectCart,
  selectTotal
} from '../selectors/cart';
import {
  deleteItem,
} from '../actions/cart';

import Header from '../components/Header';
import Cart from '../components/Cart';


const mapStateToProps = createStructuredSelector({
  cart: selectCart(),
  total: selectTotal(),
});

const mapDispatchToProps = dispatch => ({
  deleteItem: () => dispatch(deleteItem()),
});

let styles = {
  imageWrapper: {
    flex: 1,
    alignItems: 'stretch'
  },
  image: {
    flex: 1
  }
}
class CartScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header title={'Products'}/>
        <Content>
          <Cart {...this.props} />
        </Content>
      </Container>
    )
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withConnect,
)(CartScreen);