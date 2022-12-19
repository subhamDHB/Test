import { ADD_DATA, INSERT_TO_CART, DELETE_FROM_CART } from "./action_types";
import {Insert,Deelete} from '../Constants/Functions';

const initialState1 = {
  products: [],
  totalItem: 0,
  CartItems: [],
};
const EcomActivityReducer = (state = initialState1, action) => {
  
  


  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        CartItems: [],
        products: [...action.payload],
      };
    case INSERT_TO_CART:
      return {
        ...state,
        CartItems: Insert(state, action),       
        totalItem: state.CartItems.reduce((accu,currentVal)=>accu+currentVal.Quantity,1)
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        CartItems:Deelete(state,action),
        totalItem: state.totalItem - 1,
      };

    default:
      return state;
  }
};
export default EcomActivityReducer;
