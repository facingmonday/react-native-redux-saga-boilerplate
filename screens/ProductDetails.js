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
import ProductList from '../components/ProductList';
import {
  selectActiveProduct,
} from '../selectors/products';

const mapStateToProps = createStructuredSelector({
  product: selectActiveProduct(),
});

const mapDispatchToProps = dispatch => ({
  fetchProduct: () => dispatch(fetchProduct()),
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
          <ProductList {...this.props} />
        </Content>
      </Container>
    )
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withConnect,
)(ProductDetails);