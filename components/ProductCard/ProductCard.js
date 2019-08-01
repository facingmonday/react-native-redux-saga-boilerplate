import React from "react";
import { Card, CardItem, Body, Thumbnail, Left, Text } from "native-base";

const ProductCard = (props) => {
  const { id, image, name, price } = props;
  return (
    <Card transparent>
      <CardItem button onPress={() => props.showProduct(id)}>
        <Left>
          {
            (image)
            ? <Thumbnail source={ (typeof image === 'string') ? {uri: image } : image } />
            : <Thumbnail source={require('../../assets/notfound.png')} />
          }
          <Body>
            <Text>{name}</Text>
            <Text note>{price}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
}
ProductCard.defaultProps = {
  id: '123234345',
  image: require('../../assets/images/products/123234345/thumbnail.png'),
  name: 'Sample Product',
  price: 12.99,
}
export default ProductCard;
