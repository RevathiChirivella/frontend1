import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartBtn = () => {

    const state = useSelector((state) => state.addItem)
    return (
        <div>
            <div className="buttons">
                <NavLink to="/cart" className="btn btn-outline-dark ms-3"><i className="fa fa-shopping-cart me-1"></i>Cart(0)</NavLink>
            </div> 

        </div>
    )
}

export default CartBtn;