
import { Redirect, NavLink } from 'react-router-dom';
import { useDispatch, connect } from "react-redux";
import { logout } from "../../actions/userAction";
import { useEffect } from 'react';
import Orderservice from '../../services/order.service'
import './Profile.scss'


const Profile = (state) => {
    const currentUser = state.user.user;
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUser) {
            Orderservice.order(currentUser.id, currentUser.refreshToken).then(
                (data) => {
                    dispatch({
                        type: "ORDER_SUCCESS",
                        order: data.data,
                    });

                    return Promise.resolve();
                });
        }
    }, []);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }



    const logOut = () => {
        dispatch(logout());
    };


    return (
        <div className="profile-container">
            <div className='profile-table'>
                <div className='profile-name'>

                    <strong>{currentUser.username}</strong> Profile

            </div>
                <p>
                    <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
                    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                </p>
                <p>
                    <strong>Id:</strong> {currentUser.id}
                </p>
                <p>
                    <strong>Email:</strong> {currentUser.email}
                </p>
            </div>
            {<>
                <div className="profile-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Order id</th>
                                <th>Units</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {state.order.map((item, index) => {

                                return <tr key={index}>
                                    <td>
                                        <NavLink style={{ textDecoration: 'none', color: 'black' }} to={{pathname: `/profile/${item._id}`, query: {item}}}>
                                            <strong>{item._id}</strong>
                                        </NavLink>
                                    </td>
                                    <td>
                                        <span className='unit'><strong>{item.cart.total.productQuantity}</strong></span>
                                    </td>
                                    <td>
                                        <strong>$ {item.cart.total.totalPrice}</strong>
                                    </td>
                                    <td>
                                        <strong>{item.status}</strong>
                                    </td>
                                    <td>
                                        <strong>{item.date.split('T')[0]}</strong>
                                    </td>
                                </tr>

                            })}

                        </tbody>

                    </table>
                </div>
                <div className="cheakout-wrapper">
                    <button onClick={logOut}>LogOut</button>
                </div>
            </>}
            {/* {messages} */}
        </div>
    );
};
function mapStateToProps(state) {
    return {
        user: state.userReducer,
        order: state.orderReducer.order
    }
}
export default connect(mapStateToProps)(Profile);