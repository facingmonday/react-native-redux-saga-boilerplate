import React, { Component } from "react";
import { View, Image } from 'react-native';

import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Segment } from 'native-base';
import Loading from '../Loading';
import ProductCard from '../ProductCard';
import ProductGrid from './ProductGrid';
import ProductList from './ProductList';

export default class ProductGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'list'
    }
  }
  
  componentDidMount() {
    //this.props.fetchProducts();
  }
  render() {
    const { loading, error, products } = this.props;
    if(loading) {
      return <Loading />
    } else if(error){
      return <Text>Error</Text>
    }
    return (
      <Container>
        <Content>
          <View>
            <Segment>
              <Button first {...(this.state.active === 'list' ? { active: true }: {})} onPress={() => this.setState({ active: 'list' })}><Text>List</Text></Button>
              <Button last {...(this.state.active === 'grid' ? { active: true }: {})} onPress={() => this.setState({ active: 'grid' })}><Text>Grid</Text></Button>
            </Segment>
          </View>
          {
            (this.state.active === 'grid')
            ? <ProductGrid products={products} />
            : <ProductList products={products} />
          }
        </Content>
      </Container>
    );
  }
}