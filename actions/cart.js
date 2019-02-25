import {
  ADD_ITEM_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
} from '../constants/cart';

export function addItemToCart(item) {
  return {
    type: ADD_ITEM_TO_CART,
    item,
  };
}
export function updateCartQuantity(item) {
  return {
    type: UPDATE_CART_QUANTITY,
    item,
  };
}
export function removeItemFromCart(item) {
  return {
    type: REMOVE_ITEM_FROM_CART,
    item,
  };
}
export function clearCart(item) {
  return {
    type: CLEAR_CART,
    item,
  };
}