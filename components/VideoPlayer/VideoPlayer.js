import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import VideoPlayer from 'react-native-video-player';

const VIMEO_ID = '179859217';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      video: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrl: undefined,
      videoUrl: undefined,
    };
  }

  render() {
    return (
      <View>
        <VideoPlayer
          //endWithThumbnail
          //thumbnail={{ uri: this.state.thumbnailUrl }}
          video={{ uri: this.props.source }}
          //videoWidth={this.state.video.width}
          //videoHeight={this.state.video.height}
          //duration={this.state.video.duration/* I'm using a hls stream here, react-native-video
          //  can't figure out the length, so I pass it here from the vimeo config */}
          ref={r => this.player = r}
        />
      </View>
    );
  }
}