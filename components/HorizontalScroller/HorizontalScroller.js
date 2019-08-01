import React, { cloneElement, Children, Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

class HorizontalScroller extends Component {
  render() {
    const { label, children } = this.props;
    return (
      <ScrollView scrollEventThrottle={16} >
        { (label && <View style={styles.container}>
          <Text style={styles.scrollText}>{label}</Text>
        </View>)}
        <View style={{ ...styles.thumbnailContainer, ...(this.props.height ? {height: this.props.height} : {})}}>
          <ScrollView
            horizontal
            decelerationRate={0}
            showsHorizontalScrollIndicator={false}
            snapToInterval={this.props.snapToInterval} //your element width
            snapToAlignment={"left"}
          >
            { 
              Children.map(children, (child, i) => (
                <View style={styles.thumbnail}>
                  { cloneElement(child, { key: i })}
                </View>
              ))
            }
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  scrollText: {
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 10
  },
  thumbnailContainer: {
    height: 150,
    marginTop: 5,
  },
  thumbnail: {
    height: 130,
    padding: 10,
  }
});

export default HorizontalScroller;