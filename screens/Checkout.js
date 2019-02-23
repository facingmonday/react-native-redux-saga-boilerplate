import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from '../components/Header';
import { Container, Content, Item, Input } from 'native-base';
import Checkout from '../components/Checkout';

import {
  selectCart
} from '../selectors/cart';
import {
  checkout,
} from '../actions/cart';

const mapStateToProps = createStructuredSelector({
  cart: selectCart(),
});

const mapDispatchToProps = dispatch => ({
  checkout: () => dispatch(checkout()),
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
class CheckoutScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header title={'Products'}/>
        <Content>
          <Checkout {...this.props} />
        </Content>
      </Container>
    )
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withConnect,
)(CheckoutScreen);