import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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

const TEXT_SIZE = {
  s: { fontSize: 12, fontWeight: 'bold' },
  m: { fontSize: 18, fontWeight: 'bold' },
  l: { fontSize: 26, fontWeight: 'bold' },
  xl: { fontSize: 36, fontWeight: 'bold' },
  xxl: { fontSize: 48, fontWeight: 'bold' }
}

class ImageWithText extends Component {
  render() {
    const { width, height, source, text, subtitle, onPress } = this.props;
    return (
      <View key={this.props.key} resizeMode={'cover'} style={{
        width,
        height,
        ...TEXT_POSITION[this.props.textPosition],
        ...(this.props.rounded ? { borderRadius: 10 } : {}),
      }}>
        <Image
          resizeMode={'cover'}
          style={{
            width,
            height,
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
            ...(this.props.rounded ? { borderRadius: 10 } : {})
          }}
          source={ source }
        />
        <View>
          {
            (text)
            ? <Text style={{ ...styles.title, ...TEXT_POSITION[this.props.textPosition], ...TEXT_SIZE[this.props.textSize] }}>{text}</Text>
            : this.props.children
          }
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
  },
})

ImageWithText.defaultProps = {
  textSize: 'm'
}

export default ImageWithText;