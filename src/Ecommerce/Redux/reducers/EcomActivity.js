import { ADD_DATA, INSERT_TO_CART,DELETE_FROM_CART} from "./action_types";

const initialState={
    products:[],
    totalItem:0,
    CartItems:[]
};
const EcomActivityReducer =(state=initialState,action)=>{
    switch(action.type){
        case ADD_DATA: 
            return {
                ...state,
                products:[...action.payload]
            }
        case INSERT_TO_CART:
            return {
                ...state,
                CartItems:[...state.CartItems,action.payload],
                totalItem: state.totalItem+1
            }
        case DELETE_FROM_CART:
            return{
                ...state,
                CartItems:state.CartItems.filter((ele,index)=>state.CartItems.lastIndexOf(action.payload)!==index),
                totalItem:state.totalItem-1
            }
        
            default : return state;
    }
}
export default EcomActivityReducer;