import axios from "axios";



export function grab(query, page) {

    return  dispatch =>{
            axios({
                url: '/item',
                baseURL: 'http://localhost:8080/api/',
            }).then(res => {

                dispatch(videoGrabSuccess(res.data.data))
            })
        }
}

export function videoGrabSuccess(videos) {
    return {
        type: "VIDEO_GRAB_SUCCESS",
        videos
    }
}