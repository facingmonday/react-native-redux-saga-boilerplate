import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Header from '../components/Header';
import { Container, Content, Item, Input } from 'native-base';
import ProductDetail from '../components/ProductDetail';
import {
  selectActiveProduct,
} from '../selectors/products';
import {
  fetchProduct,
  addItemToCart
} from '../actions/cart';

const mapStateToProps = createStructuredSelector({
  product: selectActiveProduct(),
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: () => dispatch(fetchProduct()),
  addItemToCart: (product) => dispatch(addItemToCart(product))
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
class ProductDetails extends React.Component {
  render() {
    return (
      <Container>
        <Header title={'Products'}/>
        <Content>
          <ProductDetail {...this.props} />
        </Content>
      </Container>
    )
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withConnect,
)(ProductDetails);