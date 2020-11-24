  
import {combineReducers} from "redux";
import cart from "./cart"
import clothes from "./clothes"

export default combineReducers({
    cartReducer: cart,
    cloathesReducer: clothes
})