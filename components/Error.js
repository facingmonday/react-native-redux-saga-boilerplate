import React from "react";
import { Card, CardItem, Body, Text } from "native-base";

const Loading = (props) => {
  const { product } = props;
  return (
    <Card transparent>
      <CardItem>
        <Body>
          <Text>
            Loading
          </Text>
        </Body>
      </CardItem>
    </Card>
  );
}
export default Loading;
