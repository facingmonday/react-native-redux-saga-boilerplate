import React from "react";
import { Card, CardItem, Body, Thumbnail, Left, Text } from "native-base";

const ProductCard = (props) => {
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
          </Body>
        </Left>
        
      </CardItem>
    </Card>
  );
}
export default ProductCard;
