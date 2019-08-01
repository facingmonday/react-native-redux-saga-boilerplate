import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Card, CardItem, Body, Text, Thumbnail, Icon, Left, Right, Button } from 'native-base';

class SocialCard extends Component {
  render() {
    const { name, title, thumbnail, image, likesCount, commentsCount, comments, time } = this.props;
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={thumbnail} />
            <Body>
              <Text>{name}</Text>
              <Text note>{title}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={image} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>{likesCount}</Text>
            </Button>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>{commentsCount}</Text>
            </Button>
          </Left>
          <Right>
            <Text>{time}</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default SocialCard;