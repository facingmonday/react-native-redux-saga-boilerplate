import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from 'native-base';

const SocialButtonIcon = (props) => <Icon type="FontAwesome" name={props.platform} style={styles.icon} />

class SocialButtons extends Component {
  platformBoolToString = () => {
    if(this.props.facebook) {
      return 'facebook';
    } else if (this.props.twitter) {
      return 'twitter';
    } else if (this.props.instagram) {
      return 'instagram';
    } else if (this.props.google) {
      return 'google';
    }
  }
  render() {
    return (
      <View style={styles.socialButtonContainer}>
        <Button style={styles.socialButton}>
          <Text>
            <SocialButtonIcon platform={this.platformBoolToString()} />
          </Text>
        </Button>
      </View>
    );
  }
}
SocialButtons.propTypes = {
  facebook: PropTypes.bool,
  twitter: PropTypes.bool,
  instagram: PropTypes.bool,
  google: PropTypes.bool,
}
const styles = StyleSheet.create({
  socialButtonContainer: {
    flex: 1,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  icon: {
    color: 'white',
  },
  background: {
    
  }
})
export default SocialButtons;