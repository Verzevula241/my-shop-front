export function cartData(product){
    return{
        type: "CART_DATA_ADD",
        product
    }
}
export const updateCart = () => {
    return {
        type: "UPDATE_CART"
    }
}