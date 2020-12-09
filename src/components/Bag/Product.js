import React from 'react';
import './Bag.scss'

function Product(props) {
    return<div className="shelf-item">
        <div className="shelf-item__thumb">
            <img src={props.item.imageUrl} alt={props.item.name}/>
        </div>
        <p className="shelf-item__title">{props.item.name}</p>
        <div className="shelf-item__price">
        <div className="val">
          <b>{props.item.price}</b>
        </div>
      </div>
    </div>
}

export default Product