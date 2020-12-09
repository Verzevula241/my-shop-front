const initialState = {
    id: 0,
    cart: [

    ],
    total: {
        productQuantity: 0,
        totalPrice: 0,
    }

}

// Reducer
export default function Cart(state = initialState, action) {
    switch (action.type) {
        case "CART_DATA_ADD": {
            const existProduct = state.cart.findIndex(p => p.id === action.product.id);
            action.product.units = 1
            if (existProduct >= 0) {

                const cartProducts = state.cart.slice();

                const existingProduct = cartProducts[existProduct];

                const updatedUnitsProduct = {
                    ...existingProduct,
                    units: existingProduct.units + action.product.units
                };

                cartProducts[existProduct] = updatedUnitsProduct;

                return {
                    ...state, cart: cartProducts,
                }
            }
            else {
                return ({
                    ...state, cart: [...state.cart, action.product]
                }
                )
            }
        }

        case "UPDATE_CART": {

            let productQuantity = state.cart.reduce((sum, p) => {
                sum += p.units;
                return sum;
            }, 0);

            let totalPrice = state.cart.reduce((sum, p) => {
                sum += p.price * p.units;
                return sum;
            }, 0);

            let cartTotal = {
                productQuantity,
                totalPrice,
            };

            return {
                ...state,
                total: cartTotal
            };
        }
        case "CART_GRAB_SUCCESS":{
            if(action.data.data===null){
                return {
                    ...state,
                    cart: []
                }
            }else{
            return {
                ...state,
                cart: action.data.data.cart
            }
        }
        }
        case "CART_PLUS_UNITS":{
            const existProduct = state.cart.findIndex(p => p.id === action.product.id);
            
            const cartProducts = state.cart.slice();

            const existingProduct = cartProducts[existProduct];

            const updatedUnitsProduct = {
                ...existingProduct,
                units: existingProduct.units + 1
            };

            cartProducts[existProduct] = updatedUnitsProduct;

            return {
                ...state, cart: cartProducts
            }
        }
        case "CART_MINUS_UNITS":{
            const existProduct = state.cart.findIndex(p => p.id === action.product.id);
            
            const cartProducts = state.cart.slice();

            const existingProduct = cartProducts[existProduct];

            const updatedUnitsProduct = {
                ...existingProduct,
                units: existingProduct.units - 1
            };
            if (updatedUnitsProduct.units === 0){
                cartProducts.splice(existProduct,1)
                return {
                    ...state, cart: cartProducts
                }

            }else{

            
            cartProducts[existProduct] = updatedUnitsProduct;

            return {
                ...state, cart: cartProducts
            }
        }
        }
        case "CART_TO_ORDER":{

            return {
                ...state, cart: []
            }
        }
        default:
            return state
    }

}