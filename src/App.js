import './App.css';
import {connect} from "react-redux"
import {grab} from './actions/clothesAction'
import React, { useEffect } from 'react';
import Vitrina from './components/Vitrina'
import {NavLink,Route,Redirect} from 'react-router-dom'
import CrownLogo from './img/crown.svg';




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
              <Route path="/home" component={() =>  <Vitrina data = {state.data}/>} />
              <Redirect from='/' to='/home'/>
    </div>
  );
}

function mapStateToProps(state){
  return{
      data: state.cloathesReducer.clothes
  }
}
function mapDispatchToProps(dispatch){
  return{
      getVideos: ()=> {dispatch(grab())},
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
