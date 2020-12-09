// import React, { useState } from "react";
// import "./Login.css";
// import { connect } from "react-redux"
// import {login} from '../../actions/clothesAction'


// function Login(state) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   // const sighin = (email,password) => {
//   //   axios.post('http://localhost:8081/login', querystring.stringify({
//   //     email: email,
//   //     password: password,
//   //   }), {
//   //     headers: {
//   //       "Content-Type": "application/x-www-form-urlencoded"
        
//   //     }
//   //   }).then(function (response) {
//   //    localStorage.setItem('id',response.data.id)
//   //    localStorage.setItem('username',response.data.username)
//   //    localStorage.setItem('email',response.data.email)

//   //   });
//   // }

//   return (<div className='body-login'>
// <div className="container-sighin">
// 	<div className="">
// 		<form className='form-sighin'>
// 			<h1>Sign in</h1>
// 			<input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
// 			<input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
// 			<button className='buttonSighin' disabled={!validateForm()} onClick={()=>{state.login(email,password)}}>Sign In</button>
// 		</form>
// 	</div>
// </div>

//   </div>);
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     login: (email,password) => { dispatch(login(email,password)) }
//   }
// }
// export default connect(null,mapDispatchToProps)(Login);

import React ,{useState} from 'react';
import { connect } from "react-redux"
import {login} from '../../actions/clothesAction'
import "./Login.css";

import axios from "axios"
var querystring = require('querystring');

const Login = (state) => {
  const [email, setEmail] = useState("react@test.com");
  const [password, setPassword] = useState("1234567");


    const sighin = async(email,password) => {
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

  return (<>
  <input type="email" placeholder="Email"/>
  <input type="password" placeholder="Password"/>
  <button className='buttonSighin' onClick={()=>{sighin(email,password)}}>Sign In</button>
  </>);
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email,password) => { dispatch(login(email,password));return Promise.resolve(); }
  }
}

export default connect(null, mapDispatchToProps)(Login);