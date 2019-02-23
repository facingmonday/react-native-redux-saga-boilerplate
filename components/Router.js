import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import AppLoading from '../screens/AppLoading'
import Dashboard from '../screens/Dashboard';
import Settings from '../screens/Settings';
import Products from '../screens/Products';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';
import Checkout from '../screens/Checkout';

export default (props) => (
  <Router>
    <Scene key={'root'} hideNavBar>
      <Scene key={'appLoading'} component={AppLoading} title={'Loading'} initial />
      <Scene key={'login'} component={Login} title={'Login'} />
      <Scene key={'signUp'} component={SignUp} title={'Sign Up'} />
      <Scene key={'dashboard'} component={Dashboard} title={'Dashboard'} />
      <Scene key={'settings'} component={Settings} title={'Settings'} />
      <Scene key={'products'} component={Products} title={'Products'} />
      <Scene key={'productDetails'} component={ProductDetails} title={'Product Details'} />
      <Scene key={'cart'} component={Cart} title={'Cart'} />
      <Scene key={'checkout'} component={Checkout} title={'Checkout'} />
    </Scene>
  </Router>
)