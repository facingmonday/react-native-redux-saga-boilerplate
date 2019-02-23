import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
  View,
  Image,
  Dimensions,
  Keyboard,
} from 'react-native';
import Header from '../components/Header';
import { Container, Content, Item, Input } from 'native-base';
import {
  selectProductList
} from '../selectors/products';
import {
  fetchProducts,
  showProduct,
} from '../actions/products';

import ProductList from '../components/ProductList';

const mapStateToProps = createStructuredSelector({
  products: selectProductList(),
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
  showProduct: productId => dispatch(showProduct(productId)),
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
class Products extends React.Component {
  render() {
    return (
      <Container>
        <Header title={'Products'}/>
        <Content>
          <ProductList {...this.props} />
        </Content>
      </Container>
    )
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withConnect,
)(Products);