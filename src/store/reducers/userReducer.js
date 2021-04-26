import { CREATE_USER } from '../types';

const initialState = {
  name: ''
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {...state, name: action.payload}
    default:
      return state;
  }
};


