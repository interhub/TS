import { createStore } from 'redux';
import { SET_MENU } from './actionNames';
import initialState from './state';

const reducer: any = (state: any, action: any) => {
  switch (action.type) {
    case SET_MENU:
      return {
        ...state, menu: action.menu
      };
    default:
      return { ...state }
  }
};

let store = createStore(reducer, initialState);

export default store;
