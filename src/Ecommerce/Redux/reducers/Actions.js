import axios from 'axios';
import { ADD_DATA, INSERT_TO_CART, DELETE_FROM_CART} from './action_types';

const getData=(payload)=>{
    return {type:ADD_DATA,payload:payload}
}

export const fetchData=()=>async function fetchProducts(dispatch){
        const response=await axios.get("https://fakestoreapi.com/products");
        dispatch(getData(response.data))
    }

    
export const InsertToCart=(data)=>{
    return{
        type:INSERT_TO_CART,
        payload:data
    }
}
export const DeleteFromCart=(data)=>{
    return{
        type:DELETE_FROM_CART,
        payload:data
    }
}
