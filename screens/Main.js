import React from 'react';
import { View } from 'react-native';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Drawer } from 'native-base';
import {
  selectApp,
} from '../selectors/app';
import {
  openDrawer,
  closeDrawer,
} from '../actions/app';
import Router from '../components/Router';
import SideBar from '../hocs/SideBar';

const mapStateToProps = createStructuredSelector({
  app: selectApp(),
});

const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(openDrawer()),
  closeDrawer: () => dispatch(closeDrawer())
});

let styles = {
  imageWrapper: {
    flex: 1,
    alignItems: 'stretch'
  },
  image: {
    flex: 1
  }
}
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  shouldComponentUpdate(nextProps) {
    if(this.props.app && nextProps.app && this.props.app.open && !nextProps.app.open){
      this.closeDrawer();
    } else if(this.props.app && nextProps.app && !this.props.app.open && nextProps.app.open){
      this.openDrawer();
    }
    return false;
  }
  render() {
    return (
      <Drawer
        ref={(ref) => this.drawer = ref}
        content={<SideBar />}
        onClose={() => this.props.closeDrawer()}
        >
        <View style={{flex:1}} key={'main'}>
          <Router />
        </View>
      </Drawer>
    )
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withConnect,
)(Main);
