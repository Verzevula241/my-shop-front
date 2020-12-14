import axios from "axios";
var querystring = require('querystring');


const order = (id,token) => {
  return axios.post('http://localhost:8080/api/order/get', querystring.stringify({
    username: id,
    token: token
  }), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
       "accesstoken" : token
    }
  })
  
};

let service = {
    order
  };
  
  export default service