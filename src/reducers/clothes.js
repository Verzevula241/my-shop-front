const initialState = {
    loading: false,
    clothes: [],
    dataClothes: {},
    modalData: {},
    modalToggle: false
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
        case "MODAL_DATA_ADD":{
            return {
                ...state,
                modalData: action.data,
            }
        }
        case "LOGIN":{
            return {
                ...state
            }
        }
        case "MODAL_TOGGLE":{
            return {
                ...state,
                modalToggle: !state.modalToggle,
            }
        }
        default:
            return state
    }

}