import React, { cloneElement, Children, Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { Icon } from 'native-base';

const { width } = Dimensions.get('window');
const height = width * 0.8;    

const ScrollIndicator = ({type, length, index}) => {
  const indicators = [];
  for(let i = 0; i < length; i++){
    indicators.push(<View key={i} style={{ ...styles.scrollIndicator, opacity: (i === index) ? .8 : .4 }} />);
  }
  return (<View
      style={styles.scrollIndicatorContainer}
    >
      { indicators }
    </View>
  )
};

class HeroScroller extends Component {
  state = {
    scrollPosition: 0
  }
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  handleScroll(e) {
    this.setState({ scrollPosition: e.nativeEvent.contentOffset.x / width })
  }
  render() {
    const { children, scrollIndicator } = this.props;
    return (
      <View
        style={styles.scrollContainer}
      >
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.handleScroll}
        >
          { 
            Children.map(children, (child, i) => (cloneElement(child, { key: i, style: styles.image })))
          }
        </ScrollView>
        { ( scrollIndicator && <ScrollIndicator type={scrollIndicator} length={Children.count(children)} index={this.state.scrollPosition} />) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    height,
  },
  image: {
    width,
    height,
  },
  scrollIndicatorContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: height-50,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  scrollIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'black',
    margin: 5
  }
});

export default HeroScroller;