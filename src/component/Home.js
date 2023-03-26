import React from 'react';
import Products from './Products';
import Promotions from './Promotions';

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0 ">
                <img src="/assets/images/banner2.jpg" className="card-img" alt="Backgroundimage" height="450px" width="10px"/>
            
            </div>
            <br></br>
            {/* <Products/> */}

            <Promotions/>

        </div>
    );
}

export default Home;