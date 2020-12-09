import React from 'react';
import { connect } from "react-redux"
import { Plus,Minus,cartToOrder} from '../../actions/cartAction';
import './Bag.scss'



const Cart = (state) => {
  return (<>
    <div className='cart-table'>
      <div>
        <span className="bag-name">Your Bag</span>
        <span>{state.total.productQuantity} item</span>
      </div>

    
    </div>
    {state.total.productQuantity ?
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Units</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item, index) => {

           return <tr key={index}>
              <td className='d-flex'>
                <div className='image-wrapper'>
                  <img src={item.imageUrl} alt="" />
                </div>
                <div className="item">
                  <strong>{item.name}</strong>
                  <br />
                  <small>Size : M</small>
                  <br />
                  <small>Color : White, Gold</small>
                </div>
              </td>
              <td>
                <strong>$ {item.price}</strong>
              </td>
              <td>
                <span className="add" onClick={()=>{state.plus(item).then(state.update())}}>+</span>
                <span className='unit'><strong>{item.units}</strong></span>
                <span className="add" onClick={()=>{state.minus(item).then(state.update())}}>-</span>
              </td>
              <td>
                <strong>$ {item.price*item.units}</strong>
              </td>
            </tr>

          })}

        </tbody>
      </table>
    </div>: <div className='emptyCart'><p>Cart is empty</p></div>
}
{state.total.productQuantity ?
    <div className="cheakout-wrapper">
      <button onClick={()=>{state.cheackout(state.cart)}}>Cheackout</button>
        <strong>Total: {state.total.totalPrice}</strong>

    </div>
    : <p></p>}
  </>);
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer.cart,
    total: state.cartReducer.total
  }
}
function mapDispatchToProps(dispatch) {
  return {
    update: () => dispatch({ type: 'UPDATE_CART' }),
    plus: product => { dispatch(Plus(product));return Promise.resolve(); },
    minus: product => { dispatch(Minus(product));return Promise.resolve(); },
    cheackout: cart =>{ dispatch(cartToOrder(cart));return Promise.resolve();}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);