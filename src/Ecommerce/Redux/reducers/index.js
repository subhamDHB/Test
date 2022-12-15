import {combineReducers} from "redux"
import EcomActivityReducer from "./EcomActivity"

const rootReducer = combineReducers({
    ecom:EcomActivityReducer
});

export default rootReducer;