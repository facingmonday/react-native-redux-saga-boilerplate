import React from "react";
import { Card, CardItem, Body, Thumbnail, Left, Text, Button } from "native-base";

const ProductDetail = (props) => {
  const { product } = props;
  return (
    <Card transparent>
      <CardItem button onPress={() => props.showProduct(product.id)}>
        <Left>
          {
            (product.image)
            ? <Thumbnail source={{uri: product.image }} />
            : <Thumbnail source={require('../assets/notfound.png')} />
          }
          <Body>
            <Text>{product.name}</Text>
            <Text note>{product.price}</Text>
            <Button onPress={()=> props.addItemToCart(product)}><Text>Add to Cart</Text></Button>
          </Body>
        </Left>
        
      </CardItem>
    </Card>
  );
}
export default ProductDetail;
