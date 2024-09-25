
import { ADD_TO_CART } from './../Constant';
export const addToCart = (data) => {
    return {
      type: ADD_TO_CART,
      payload: data, 
    };
  };



  export const RemoverToCart = (data) => {
    return {
      type: 'REMOVE_TO_CART',
      payload: data, 
    };
  };