import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux"
import {grab} from './actions/clothesAction'
import React, { useState, useEffect } from 'react';
import Vitrina from './components/vitrina'
import {Route, NavLink} from 'react-router-dom'
import ReactLogo from './img/crown.svg';




function App(state) {

    
    useEffect(() => {
      state.getVideos();
    },[]);

  return (
    <div className="App">
       <header>
          <nav className="nav">
              <img src={CrownLogo} alt=""></img>
              <ul>
                  <li>
                      <NavLink to="/search" className="header-button"><span style={{paddingLeft: "1em"}}>Поиск</span></NavLink>
                  </li>
                  <li>
                      <NavLink to="/video" className="header-button"><span style={{paddingLeft: "1em"}}>Закладки</span></NavLink>
                  </li>
              </ul>
          </nav>
          </header>
      <button onClick={()=><vitrina data = {state.data}/>}>sdfgldfkglfkdjgghl</button>
      <Vitrina data = {state.data}/>
    </div>
  );
}

function mapStateToProps(state){
  return{
      // videos: state.clothes.clothes,
      data: state.cloathesReducer.clothes
  }
}
function mapDispatchToProps(dispatch){
  return{
      getVideos: ()=> {dispatch(grab())},
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
