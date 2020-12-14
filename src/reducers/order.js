const initialState = {
    order:[]

}

// Reducer
export default function Cart(state = initialState, action) {
    switch (action.type) {
        case "ORDER_SUCCESS":{
            if(action.order.data===null){
                return {
                    ...state,
                    order: []
                }
            }else{
            return {
                ...state,
                order: action.order.data
            }
        }
        }
        default:
            return state

    }
}