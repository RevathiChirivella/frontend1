import React from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Cart from './Cart'
import Search from './Search';
import CartBtn from './CartBtn';



const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">SpeedPack</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>


                        </ul>

                        {/* <form>
                            <Search />
                        </form> */}
                        <form className="d-flex" role="search">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                               <NavLink to="/search" ><button className="btn btn-outline-dark mx-6 ms-1" type="submit">Search</button></NavLink>
                        </form>

                        {/* <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark ms-5"><i className="fa fa-sign-in me-1"></i>Login</NavLink>
                        </div> */}



                        {/* <div className="buttons">
                            <NavLink to="/register" className="btn btn-outline-dark mx-3"><i className="fa fa-user-plus me-1"></i>Register</NavLink>
                        </div> */}

                        {/* <div className="buttons">
                            <NavLink to="/cart" className="btn btn-outline-dark ms-3"><i className="fa fa-shopping-cart me-1"></i>Cart(0)</NavLink>
                        </div> */}


                        {/* <div>
                            <Login />
                        </div> */}

                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark ms-5"><i className="fa fa-sign-in me-1"></i>Login</NavLink>
                        </div> 
                    

                        {/* <div>
                            <Signup/>
                        </div> */}


                        <div className="buttons">
                            <NavLink to="/signup" className="btn btn-outline-dark mx-3"><i className="fa fa-user-plus me-1"></i>Register</NavLink>
                        </div> 


                        {/* <div className="buttons">
                            <NavLink to="/cartbtn" className="btn btn-outline-dark ms-3"><i className="fa fa-shopping-cart me-1"></i>Cart(state.length)</NavLink>
                        </div>  */}

                        <div>
                            <CartBtn />
                        </div> 

                        




                        {/* <div className="buttons">
                            <NavLink to="/register" className="btn btn-outline-dark mx-3"><i className="fa fa-user-plus me-1"></i>Register</NavLink>
                        </div>  */}




                        {/* <NavLink to="/signupnew" type="button" className="btn btn-outline-dark mx-3" data-bs-toggle="modal" data-bs-target="#signupModal" ><i className="fa fa-user-plus me-1" ></i>
                        Register
                        </NavLink> */}



                        {/* <div>
                            <Cart />
                        </div> */}



                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;