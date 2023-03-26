import React from 'react';
import { NavLink } from 'react-router-dom';


const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className="text-dark fw-bold mb-4">About Us</h3>
                        <p className="lead mb-4">
                        <b>SpeedPack is an online mart which was started in the year 2020.
                    It is one of the fastest growing onine mart these days. People can get all their needs from our website from Electronics to Jewellery. You can find everything under one hood. 
                    There is no need to search everywhere because you will find all the products in our website. We do accept Online and COD payment. Why to take stress just sit calm, browse your favourite things and place order in our SpeedPack. </b>
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-dark">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6">
                        <img src="assets/images/aboutus.jpg" alt="About Us" height="300px" width="500px"></img>

                    </div>
                </div>
            </div>

        </div>
    )

}
export default About;

