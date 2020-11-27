import './App.css';
import {connect} from "react-redux"
import {grab, grabItem} from './actions/clothesAction'
import React, { useEffect } from 'react';
import Vitrina from './components/Vitrina'
import {NavLink,Route,Redirect, Switch} from 'react-router-dom'
import CrownLogo from './img/crown.svg';
import ItemPage from './components/ItemPage';
import Shop from './components/Shop'




function App(state) {

    

    useEffect(() => {
      state.getVideos();
    },[]);

  return (
    <div className="App">
       <header>
        <NavLink to="/home"><img src={CrownLogo} alt=""/></NavLink>
        <div style={{display:"flex"}}>
            <NavLink className="semi-transparent-button" to="/shop">SHOP</NavLink>
            <NavLink className="semi-transparent-button" to="/contacts">CONTACTS</NavLink>
        </div>
          </header>
              <Switch>
              <Route path="/home" component={() =>  <Vitrina/>} />
              <Route path="/shop" component={() =>  <Shop/>} />
              <Route path="/:name" component={() => <ItemPage page = ':name'/>} />
              <Redirect from='/' to='/home'/>
              </Switch>
    </div>
  );
}

function mapStateToProps(state){
  return{
      data: state.cloathesReducer.clothes,
      items: state.cloathesReducer.dataClothes,
  }
}
function mapDispatchToProps(dispatch){
  return{
      getVideos: ()=> {dispatch(grab())},
      getItem: route => {dispatch(grabItem(route))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
