import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SocialCard from './SocialCard';

const feed = [
  {
    name: 'Tiffany',
    title: 'React Composer',
    thumbnail: require('../../assets/social/1/thumbnail.png'),
    image: require('../../assets/social/1/image.png'),
    likesCount: 12,
    commentsCount: 4,
    comments: [],
    time: 'just now'
  },
  {
    name: 'Stephanie',
    title: 'Node JS Ninja',
    thumbnail: require('../../assets/social/2/thumbnail.png'),
    image: require('../../assets/social/2/image.png'),
    likesCount: 16,
    commentsCount: 2,
    comments: [],
    time: 'few mintues ago'
  },
  {
    name: 'Matt',
    title: 'Sass Slinger',
    thumbnail: require('../../assets/social/3/thumbnail.png'),
    image: require('../../assets/social/3/image.png'),
    likesCount: 16,
    commentsCount: 2,
    comments: [],
    time: '1d ago'
  }
]
class SocialFeed extends Component {
  render() {
    return (
      <ScrollView style={styles.socialFeed}>
        { feed.map((post, i) => <SocialCard key={i} {...post} />) }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  socialFeed: {
    height: '100%',
    padding: 15,

  }
});

export default SocialFeed;