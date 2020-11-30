const initialState = {
    cart: [
        {id:Number,name:String,imageUrl:String,price:0,units:0}
    ],
    total: {
            productQuantity: 0,
            totalPrice: 0,
    }

}

const updateCart = cartProducts => dispatch => {
    let productQuantity = cartProducts.reduce((sum, p) => {
      sum += p.units;
      return sum;
    }, 0);
  
    let totalPrice = cartProducts.reduce((sum, p) => {
      sum += p.price * p.units;
      return sum;
    }, 0);
    let cartTotal = {
      productQuantity,
      totalPrice,
    };
  
    dispatch({
      type: "UPDATE_CART",
      payload: cartTotal
    });
  };

// Reducer
export default function Cart(state=initialState,action){
    switch (action.type) {
        case "CART_DATA_ADD":{
            const existProduct = state.cart.findIndex(p => p.id === action.product.id);
            action.product.units = 1
            if (existProduct > 0) {

                const cartProducts = state.cart.slice();
        
                const existingProduct = cartProducts[existProduct];
        
                const updatedUnitsProduct = {
                  ...existingProduct,
                  units: existingProduct.units + action.product.units
                };
        
                cartProducts[existProduct] = updatedUnitsProduct;
        
               return {
                cart: cartProducts,
            }
            }
            else{
                return ({
                    cart: [...state.cart, action.product]
                }
                )
            }
            }
            
            case "UPDATE_CART":

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
        default:
            return state
    }

}