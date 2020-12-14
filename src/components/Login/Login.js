import React, { useState, useRef } from "react";
import { useDispatch, connect } from "react-redux";
import { NavLink, Redirect } from 'react-router-dom';
import './Login.scss'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../../actions/userAction";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const isLoggedIn  = props.isLoggedIn
  const message  = props.message;

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          props.history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <div >
      <div className='form'>
        <Form onSubmit={handleLogin} ref={form}>
          <div >
            <Input
              type="text"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
              placeholder="Email"
            />
          </div>

          <div >
            <Input
              type="password"
 
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
              placeholder="Password"
            />
          </div>

          <div>
            <button  disabled={loading}>
              {loading && (
                <span></span>
              )}
              <span>Login</span>
            </button>
          </div>
          <p class="message">Not registered? <NavLink to="/registration">Create an account</NavLink></p>

          {message && (
            <div>
              <div  role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
    return {
        isLoggedIn: state.userReducer.isLoggedIn,
        message: state.messageReducer.message
    }
  }

export default connect(mapStateToProps)(Login);