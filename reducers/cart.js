import {
  ADD_ITEM_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
} from '../constants/cart';

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return { ...state, items: state.items.concat(action.item) };
    case UPDATE_CART_QUANTITY:
      return { ...state };
    case REMOVE_ITEM_FROM_CART:
      return { ...state };
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
}
