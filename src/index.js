  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux"
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';
import Combine from "./reducers/index";


const store = createStore(Combine,applyMiddleware(thunk))

store.subscribe(() => {
    console.log('Subscribe', store.getState())
})

const app = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
          {app}
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
