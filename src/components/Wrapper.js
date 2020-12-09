import { grab, grabItem } from '../actions/clothesAction'
import { grabCart } from '../actions/cartAction'
import { connect } from "react-redux"
import React, { useEffect } from 'react';

function Wrapper(state) {

        state.getDBItems().then(state.getCart(localStorage.getItem('key')));

      return <>
        {state.component}
      </>

}



function mapStateToProps(state) {
    return {
      data: state.cloathesReducer.clothes,
      items: state.cloathesReducer.dataClothes,
      cart: state.cartReducer.cart,
      total: state.cartReducer.total.productQuantity
    }
  }
function mapDispatchToProps(dispatch) {
    return {
      getDBItems: () => { dispatch(grab());return Promise.resolve(); },
      getItem: route => { dispatch(grabItem(route)) },
      getCart: id => { dispatch(grabCart(id)) }
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Wrapper)