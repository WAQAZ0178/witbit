import {automotive, hobbies, home, landScapping} from '../assets';
import * as Actions from './action-types';

const INITIAL_STATE = {
  cart: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Actions.SET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};
