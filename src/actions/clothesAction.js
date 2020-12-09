import axios from "axios";
var querystring = require('querystring');



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
export function modalData(data){
    return{
        type: "MODAL_DATA_ADD",
        data
    }
}
export function modalToggle(){
    return{
        type: "MODAL_TOGGLE"
    }
}

export function dataGrabSuccess(data) {
    return {
        type: "DATA_GRAB_SUCCESS",
        data
    }
}
export function sighin(email,password) {
    return {
        type: "DATA_GRAB_SUCCESS",
        email: email,
        password: password
    }
}
export function itemGrabSuccess(data) {
    return {
        type: "ITEM_GRAB_SUCCESS",
        data
    }
}
export function login(email,password){
    
    axios.post('http://localhost:8081/login', querystring.stringify({
      email: email,
      password: password,
    }), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
        
      }
    })
    return {
        type: "LOGIN",
    }
}