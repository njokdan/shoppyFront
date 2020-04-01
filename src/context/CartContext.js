import createDataContext from './createDataContext';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART': {
      return [...state].concat([action.payload]);
    }
    case 'REMOVE_ITEM_FROM_CART': {
      return state.filter(product => {
        return product.cartId != action.payload;
      });
    }
    case 'EMPTY_CART':
      return [];
    default:
      return state;
  }
};

const addItemToCart = dispatch => item => {
  dispatch({type: 'ADD_ITEM_TO_CART', payload: item});
};

const removeItemFromCart = dispatch => cartId => {
  dispatch({type: 'REMOVE_ITEM_FROM_CART', payload: cartId});
};

const emptyCart = dispatch => () => {
  dispatch({type: 'EMPTY_CART'});
};

export const {Provider, Context} = createDataContext(
  cartReducer,
  {addItemToCart, removeItemFromCart, emptyCart},
  [],
);
