const initialState = {
    loading: false,
    clothes: [],
    dataClothes: [],
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
        case "VIDEO_GRAB_SUCCESS":{
            return {
                ...state,
                loading: false,
                clothes: [...action.videos],
            }
        }
        default:
            return state
    }

}