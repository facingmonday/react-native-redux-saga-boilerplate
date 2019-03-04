import React, { Component } from "react";
import { Container, Content, Text } from "native-base";
import Loading from './Loading';
import Error from './Error';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    const { loading, error, products } = this.props.products;
    if(loading) {
      return <Loading />
    } else if(error){
      return <Error />
    }
    return (
      <Container>
        <Content>
          {
            (products && products.length)
            ? products.map((product) => <ProductCard key={product.id} product={product} showProduct={this.props.showProduct} />)
            : <Text>No Products</Text>
          }
        </Content>
      </Container>
    );
  }
}