  
import {combineReducers} from "redux";
import cart from "./cart"
import clothes from "./clothes"
import user from "./user"
import message from "./message"
import order from "./order"

export default combineReducers({
    cartReducer: cart,
    cloathesReducer: clothes,
    userReducer: user,
    messageReducer: message,
    orderReducer: order
})