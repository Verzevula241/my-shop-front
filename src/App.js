import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux"
import {grab} from './actions/clothesAction'
import React, { useState, useEffect } from 'react';
import Vitrina from './components/vitrina'




function App(state) {

    
    useEffect(() => {
      state.getVideos();
    },[]);

  return (
    <div className="App">
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
