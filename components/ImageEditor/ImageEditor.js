import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image, Dimensions } from 'react-native';
import { Picker, Form, Icon, Container, Content, Footer } from 'native-base';
import ImagePicker from 'react-native-image-picker';

const win = Dimensions.get('window');

class ImageEditor extends Component {
  state = {
    selected: null,
    num: null,
    showCameraRollPicker: false,
    image: null,
  }
  constructor(props) {
    super(props);
  }
  
  onChangeFilter(filter) {
    return null;
  }
  
  handleImage(imageData){
    this.setState({
      image: imageData
    });
  }
  
  showImagePicker(){
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      allowEditing: true,
    }
    ImagePicker.showImagePicker(options, this.handleImage.bind(this));
  }
  
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.editorContainer}>
            <View style={styles.imageContainer}>
              {
                (this.state.image)
                ? <TouchableWithoutFeedback onPress={this.showImagePicker.bind(this)}>
                  <Image style={styles.image} resizeMode={'contain'} source={{ uri: this.state.image.uri }} />
                </TouchableWithoutFeedback>
                : <TouchableWithoutFeedback onPress={this.showImagePicker.bind(this)}>
                  <Image style={styles.image} resizeMode={'contain'} source={require('../../assets/notfound.png')} />
                </TouchableWithoutFeedback>
              }
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  editorContainer: {
    flex: 1,
    backgroundColor: 'grey',
  },
  imageContainer: {

  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: win.width,
    height: win.height,
  },
  lutContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  controlsContainer: {
    flex: 1,
    backgroundColor: 'blue',
    height: 100,
  }
})
export default ImageEditor;