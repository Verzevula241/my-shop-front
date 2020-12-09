import axios from "axios";
var querystring = require('querystring');

export function cartData(product){
    return{
        type: "CART_DATA_ADD",
        product
    }
}

export function Plus(product){
    return{
        type: "CART_PLUS_UNITS",
        product
    }
}
export function Minus(product){
    return{
        type: "CART_MINUS_UNITS",
        product
    }
}

export const updateCart = () => {
    return {
        type: "UPDATE_CART"
    }
}

export function grabCart(cart_id) {

    return  dispatch =>{
        axios.post('http://localhost:8080/api/cart', querystring.stringify({
            id: cart_id
          }), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }).then(
              res =>{dispatch(cartGrabSuccess(res.data))}
              );
          
}
}
export function cartToOrder(data){
    return {
        type: "CART_TO_ORDER",
        data
    }
}
export function cartGrabSuccess(data) {
    return {
        type: "CART_GRAB_SUCCESS",
        data
    }
}