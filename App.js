import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';
import Main from './screens/Main';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Main />
      </Provider>
    );
  }
}
