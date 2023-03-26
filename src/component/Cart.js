import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { delItem } from "../redux/actions/index";


const Cart = () => {
    const state = useSelector((state) => state.addItem)
    const dispatch = useDispatch()

    const cartItems = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3">
                <div className="container">
                    <button className="btn-close float-end" aria-label="Close"></button>
                    
                    <div className="row">
                        <div className="col-md-4">
                        <h3></h3>
                        <p></p>

                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }

    return (
        <>
          
          <NavLink to = "/checkout">Proceed to Checkout</NavLink>
        </>
    )
}

export default Cart;































// import React from 'react';
// import { useState, useEffect } from 'react';


// const Cart = () => {

//     const [cartData, setCartData] = useState([]);

//     useEffect(() => {
//         fetch(`/http://127.0.0.1:8080/cart/{user_id}`)
//         .then(response => response.json())
//         .then(data => setCartData(data));

//     },[]);


//     return (
//         <>
//             {/* <div className="buttons">
//                 <NavLink to="/cart" className="btn btn-outline-dark ms-3"><i className="fa fa-shopping-cart me-1"></i>Cart(0)</NavLink>
//             </div>  */}

//             <table>
//                 <thead>
//                     <tr>
//                         <th>Product ID</th>
//                         <th>User ID</th>
//                         <th>Quantity</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {cartData.map(cart => (
//                         <tr key={cart.id}>
//                             <td>{cart.product_id}</td>
//                             <td>{cart.user_id}</td>
//                             <td>{cart.quantity}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//         </>
//     )
// }

// export default Cart;