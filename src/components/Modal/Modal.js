import {React} from 'react'
// import './Modal.css'
import './Modal.scss'
import {connect} from "react-redux"
import {modalToggle} from '../../actions/clothesAction'
import {cartData,updateCart} from '../../actions/cartAction'
import { LoremIpsum } from 'react-lorem-ipsum';

function Modal (state) {
    return (
        <>
        <div
        className={
            state.show ? "modal-wrapper active" : "modal-wrapper"
        }
      >
        <div className="modal">
          <button
            type="button"
            className="close"
            onClick={state.hide}
          >
            &times;
          </button>
          <div className="quick-view">
            <div className="quick-view-image">
              <img
                src={state.data.imageUrl}
                alt={state.data.name}
              />
            </div>
            <div className="quick-view-details">
              <span className="product-name">{state.data.name}</span>
              <span className="product-price">{state.data.price}</span>
              <div className="product-description">
            <LoremIpsum p={2} />
            </div>
              <button onClick={()=>{state.addToCart(state.data).then(()=>{state.updateCart()})}}>BUY</button>
            </div>
            
          </div>
        </div>
      </div>
        </>
      );
}
function mapStateToProps(state){
    return{
        data: state.cloathesReducer.modalData,
        show: state.cloathesReducer.modalToggle,
        cart: state.cartReducer.cart
    }
  }
  function mapDispatchToProps(dispatch){
    return{
        hide: ()=> {dispatch(modalToggle())},
        addToCart: (item)=>{dispatch(cartData(item));return Promise.resolve();},
        updateCart: ()=>{dispatch(updateCart())}
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Modal);
