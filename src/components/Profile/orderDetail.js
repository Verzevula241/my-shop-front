import React from 'react';
import { useLocation } from 'react-router-dom'
import { Redirect, NavLink } from 'react-router-dom';
import './orderDetail.scss'

const OrderDetail = (state) => {



    let location = useLocation();
    let order = location.query
    if (!order) {
        return (<>
            <Redirect to="/profile" />;
        </>);
    } else {
        order = location.query.item
        return (<>
            <div className='detail-table'>
                <div>
                    <span className="detail-name"><strong>Order №</strong> {order._id}</span>
                    
                </div>

            </div>
            <div className="detail-wrapper">
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
                        {order.cart.cart.map((item, index) => {

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

                                    <span className='unit'><strong>{item.units}</strong></span>
                                </td>
                                <td>
                                    <strong>$ {item.price * item.units}</strong>
                                </td>
                            </tr>

                        })}

                    </tbody>
                </table>
                <div className="total">
                    <strong>Total $ {order.cart.total.totalPrice}</strong>
                </div>
                    
            </div>
        </>);
    }
}

export default OrderDetail;