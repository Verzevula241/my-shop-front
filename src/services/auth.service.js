import axios from "axios";
var querystring = require('querystring');

const API_URL = "http://localhost:8081/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", querystring.stringify({
        email: email,
        password: password,
      }),{headers: {
        "Content-Type": "application/x-www-form-urlencoded"
        
      }})
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

let service = {
  register,
  login,
  logout,
};

export default service