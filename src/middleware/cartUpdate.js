import axios from "axios"


var querystring = require('querystring');



const add = (store) => {
  axios.post('http://localhost:8080/api/cart/add', querystring.stringify({
    data: JSON.stringify(store)
  }), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then(function (response) {
    localStorage.setItem('key', response.data.data._id);
  });
}


const addOrder = (store,username) => {
  axios.post('http://localhost:8080/api/order/add', querystring.stringify({
    username: username,
    data: JSON.stringify(store)
  }), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then(function () {
    deleteCart(localStorage.getItem('key'))
  });
}

const sighin = (email,password) => {
    axios.post('http://localhost:8081/login', querystring.stringify({
      email: email,
      password: password,
    }), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
        
      }
    }).then(function (response) {
     localStorage.setItem('id',response.data.id)
     localStorage.setItem('username',response.data.username)
     localStorage.setItem('email',response.data.email)

    });
  }

const deleteCart = (id) =>{
  axios.post('http://localhost:8080/api/cart/delete', querystring.stringify({
    id: id
  }), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
}

const update = (id, store) => {
  axios.post('http://localhost:8080/api/cart/update', querystring.stringify({
    data: JSON.stringify(store),
    id: id
  }), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
}



export const ping = (store) => (next) => (action) => {
  console.log(action)
  switch (action.type) {
    case "UPDATE_CART": {
      const cart_id = localStorage.getItem('key');
      const curStore = store.getState()
      if (curStore.cartReducer.cart.length !== 0){
      cart_id ?  update(cart_id,curStore.cartReducer.cart):add(curStore.cartReducer.cart)
      }
      next(action)
      break
    }
    case "DATA_GRAB_SUCCESS": {
      next(action)
      return(
        store.dispatch({type: "UPDATE_CART"}) 
      )
    }
    case "CART_GRAB_SUCCESS": {
      next(action)
      return(
        store.dispatch({type: "UPDATE_CART"}) 
      )
    }
    case "CART_TO_ORDER": {
      const cart_id = localStorage.getItem('key');
      const curStore = store.getState()
      addOrder(curStore.cartReducer.cart,cart_id)
      next(action)
      return(
        store.dispatch({type: "UPDATE_CART"}) 
      )
    }
    case "SIGHIN": {
      sighin(action.email,action.password)
      return(
        next(action)
      )
    }
    default: {
      next(action)
    }
  }


}

