import { Switch } from "react-router-dom"

export const ping = (store) => (next) => (action) => {

    switch(action.type){
        case "CART_DATA_ADD":{
            console.log("bup",store.getState())
            next(action)
            break
        }
        default:{
           next(action)
        }
    }

    
  }

