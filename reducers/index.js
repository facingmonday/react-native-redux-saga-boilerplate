import { combineReducers } from 'redux';
import UserReducer from './user';
import AuthReducer from './auth';
import DashboardReducer from './dashboard';
import AppReducer from './app';
import ProductReducer from './products';
import CartReducer from './cart';

const rootReducer = combineReducers({
  app: AppReducer,
  user: UserReducer,
  auth: AuthReducer,
  dashboard: DashboardReducer,
  products: ProductReducer,
  cart: CartReducer
});

export default rootReducer;
