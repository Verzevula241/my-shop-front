import './App.css';
import './components/Bag/Bag.scss'
import { useDispatch,connect } from "react-redux"
import { grab, grabItem } from './actions/clothesAction'
import { grabCart } from './actions/cartAction'
import React, { useEffect } from 'react';
import Vitrina from './components/Vitrina/Vitrina'
import { NavLink, Route, Redirect, Switch } from 'react-router-dom'
import CrownLogo from './img/crown.svg';
import CategoryPage from './components/Category/CategoryPage';
import Shop from './components/Shop/Shop'
import Modal from './components/Modal/Modal'
import Bag from './components/Bag/Bag'
import Login from './components/Login/Login';
import Registr from './components/Registr/Registr';
import Profile from './components/Profile/Profile';
import { clearMessage } from "./actions/userAction";
import OrderDetail from './components/Profile/orderDetail';


function App(state) {

// eslint-disable-next-line

  useEffect(() => {
    state.getDBItems().then(state.getCart(localStorage.getItem('key')));
  }, []);
  return (
    <div className="app">
      <header>
        <NavLink to="/home"><img src={CrownLogo} alt="" /></NavLink>
        <div style={{ display: "flex" }}>
          <NavLink to="/cart">
            <span className="bag">
              <span className="bag__quantity">{state.total}</span>
            </span>
          </NavLink>
          <NavLink className="semi-transparent-button" to="/shop">SHOP</NavLink>
          {state.isLoggedIn ? <NavLink className="semi-transparent-button" to="/profile">PROFILE</NavLink>:<NavLink className="semi-transparent-button" to="/login">SIGHIN</NavLink>}
        </div>
      </header>
      <Switch>
        <Route path="/home" component={() => <Vitrina />} />
        <Route path="/shop" component={() => <Shop />} />
        <Route path="/contacts" component={() => <p>Контакты</p>} />
        <Route path="/cart" component={() => <Bag />} />
        <Route path="/login" component={() => <Login/>} />
        <Route path="/registration" component={() => <Registr/>} />
        <Route exact path="/profile" component={() => <Profile/>} />
        <Route exact path="/profile/:name" component={() => <OrderDetail/>} />
        <Route path="/:name" component={() => <CategoryPage page=':name' />} />
        <Redirect from='/' to='/home' />
      </Switch>
      <Modal />


    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state.cloathesReducer.clothes,
    items: state.cloathesReducer.dataClothes,
    cart: state.cartReducer.cart,
    total: state.cartReducer.total.productQuantity,
    isLoggedIn: state.userReducer.isLoggedIn,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getDBItems: () => { dispatch(grab());return Promise.resolve(); },
    getItem: route => { dispatch(grabItem(route)) },
    getCart: id => { dispatch(grabCart(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
