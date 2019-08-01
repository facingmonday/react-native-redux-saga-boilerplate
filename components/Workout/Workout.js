import React, { cloneElement, Children, Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

class Workout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const { label, children } = this.props;
    return (
      <ScrollView
        decelerationRate={0}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        snapToInterval={220}
        snapToAlignment="center"
      >
        
        { 
          Children.map(children, (child, i) => (
            <View style={styles.thumbnail}>
              { cloneElement(child, { key: i })}
            </View>
          ))
        }
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

export default Workout;