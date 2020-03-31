import createDataContext from './createDataContext';
import shoppyApi from '../api/shoppyApi';

const productsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return action.payload;
    default:
      return state;
  }
};

const getProducts = dispatch => async () => {
  const res = await shoppyApi.get('/getItems');
  dispatch({type: 'GET_PRODUCTS', payload: res.data});
};

export const {Provider, Context} = createDataContext(
  productsReducer,
  {getProducts},
  [],
);
