import './App.css';
import {connect} from "react-redux"
import {grab, grabItem} from './actions/clothesAction'
import React, { useEffect } from 'react';
import Vitrina from './components/Vitrina/Vitrina'
import {NavLink,Route,Redirect, Switch} from 'react-router-dom'
import CrownLogo from './img/crown.svg';
import CategoryPage from './components/Category/CategoryPage';
import Shop from './components/Shop/Shop'
import Modal from './components/Modal/Modal'



function App(state) {

    

    useEffect(() => {
      state.getVideos();
    },[]);

  return (
    <div className="app">
       <header>
        <NavLink to="/home"><img src={CrownLogo} alt=""/></NavLink>
        <div style={{display:"flex"}}>
            {/* <span className="bag">
              <span className="bag__quantity">{cartTotal.productQuantity}</span>
            </span> */}
            <span className="header-title">Bag</span>
            <NavLink className="semi-transparent-button" to="/shop">SHOP</NavLink>
            <NavLink className="semi-transparent-button" to="/contacts">CONTACTS</NavLink>
        </div>
          </header>
              <Switch>
              <Route path="/home" component={() =>  <Vitrina/>} />
              <Route path="/shop" component={() =>  <Shop/>} />
              <Route path="/contacts" component={() =>  <p>Контакты</p>} />
              <Route path="/:name" component={() => <CategoryPage page = ':name'/>} />
              <Redirect from='/' to='/home'/>
              </Switch>
              <Modal/>


    </div>
  );
}

function mapStateToProps(state){
  return{
      data: state.cloathesReducer.clothes,
      items: state.cloathesReducer.dataClothes,
      cart: state.cartReducer.cart
  }
}
function mapDispatchToProps(dispatch){
  return{
      getVideos: ()=> {dispatch(grab())},
      getItem: route => {dispatch(grabItem(route))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
