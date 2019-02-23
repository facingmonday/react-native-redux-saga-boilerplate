import {
  CHECKOUT,
} from '../constants/cart';

export function checkout(me) {
  return {
    type: CHECKOUT,
  };
}