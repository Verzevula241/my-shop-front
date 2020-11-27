import axios from "axios";



export function grab() {

    return  dispatch =>{
            axios({
                url: '/item',
                baseURL: 'http://localhost:8080/api/',
            }).then(res => {

                dispatch(dataGrabSuccess(res.data.data))
            })
        }
}
export function grabItem(itemName){
    return  dispatch =>{
        const fetchData = async (name) =>{
            const result = await axios({
            url: `/${name}`,
            baseURL: 'http://localhost:8080/api/item/',
        })

        dispatch(itemGrabSuccess(result.data.data))
    
    }
    fetchData(itemName)
    }
}

export function dataGrabSuccess(data) {
    return {
        type: "DATA_GRAB_SUCCESS",
        data
    }
}
export function itemGrabSuccess(data) {
    return {
        type: "ITEM_GRAB_SUCCESS",
        data
    }
}