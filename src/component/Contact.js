import React from 'react';
import { NavLink } from 'react-router-dom';
import Products from './Products';


const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5 text-center ">
                        <h3>Have Some Questions?</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 mt-3">
                        <img src="/assets/images/contact.jpg" alt="Contact Us" height="300px" width="500px"></img>
                    </div>
                    <div className="col-md-6 mt-3">
                        <h4>Feel free to Contact Us</h4><br></br>
                        <p> <b>PHONE NUMBER</b> : 234-9856-5400</p>
                        <p> <b>Toll Free Number</b> : 888-9123-4378</p>
                        <p> <b>EMAIL</b> : speedpack@gmail.com</p><br></br><br></br>



                        <NavLink to="/products" className="btn btn-outline-dark">Back to Products</NavLink>


                    </div>
                </div>

            </div>
            

        </div>

        
    )
}

export default Contact;