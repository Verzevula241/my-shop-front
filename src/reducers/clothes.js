const initialState = {
    loading: false,
    clothes: [],
    dataClothes: {},
    update: false
}

// Reducer
export default function videoGrab(state=initialState,action){
    switch (action.type) {
        case "CLOTHES_START":{
            return {
                ...state,loading: true
            }
        }
        case "DATA_GRAB_SUCCESS":{
            return {
                ...state,
                loading: false,
                clothes: [...action.data],
            }
        }
        case "ITEM_GRAB_SUCCESS":{
            return {
                ...state,
                loading: false,
                dataClothes: action.data,
            }
        }
        default:
            return state
    }

}