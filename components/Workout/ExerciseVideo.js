import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Video from 'react-native-video';

const TEXT_POSITION = {
  n: {  alignItems: 'center', justifyContent: 'center', textAlign: 'center' },
  ne: {  alignItems: 'flex-end', justifyContent: 'flex-start', textAlign: 'right' },
  e: {  alignItems: 'flex-end', justifyContent: 'center', textAlign: 'right' },
  se: {  alignItems: 'flex-end', justifyContent: 'flex-end', textAlign: 'right' },
  s: {  alignItems: 'center', justifyContent: 'center', textAlign: 'center' },
  sw: {  alignItems: 'flex-start', justifyContent: 'flex-end', textAlign: 'left' },
  w: {  alignItems: 'flex-start', justifyContent: 'center', textAlign: 'left' },
  nw: {  alignItems: 'flex-start', justifyContent: 'flex-start', textAlign: 'left' }
}
class ExerciseVideo extends Component {
  render() {
    const { source, width, height } = this.props;
    return (
      <View style={{ width, height, ...TEXT_POSITION[this.props.textPosition] }}>
        <Video
          source={{ uri: source }}
          ref={(ref) => {
            this.player = ref
          }}
          style={{ width, height, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          playWhenInactive={true}
          playInBackground={true}
        />
        <View>
          <Text style={{ ...styles.title, ...TEXT_POSITION[this.props.textPosition] }}>There Goes</Text>
          <Text style={{ ...styles.subtitle, ...TEXT_POSITION[this.props.textPosition]}}>My Hero</Text>
        </View>
      </View>
    );
  }
}

HeroVideo.defaultProps = {
  textPosition: 'nw'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
  },
  image: {
    width: null,
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.90)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.90)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
  },
})
export default ExerciseVideo;