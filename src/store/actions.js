import {SET_CART} from './action-types';

const setCartItems = payload => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_CART,
      payload,
    });
  };
};

export const ACTIONS = {
  setCartItems,
};
