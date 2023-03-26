import React, {useState, useEffect} from 'react';

import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import {useDispatch} from 'react-redux'
import {addItem, delItem} from '../redux/actions/index'

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cartBtn, setCartBtn] = useState("Add to Cart")

    



    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://127.0.0.1:8004/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return(
            <>
              <div className="col-md-6">
                    <Skeleton height={500}/>
              </div>
              <div className="col-md-6" style={{lineHeight:2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50} />
                    <Skeleton height={150}/>
                    {/* <Skeleton height={50} width={100}/> */}
                    <Skeleton height={50} width={100} style={{marginLeft:6}}/>
              </div>

            </>
        )
    }

    const ShowProduct = () => {
        return(
            <>
              <div className="col-md-6">
                <img src={product.image_url} alt={product.name} height="500px" width="350px"/>
              </div>

              <div className="col-md-6">
              <h3 className="text-uppercase" text-color="blue">
                    {product.category}
                </h3><br></br>
                <h3 className="text-uppercase ">
                    {product.name}
                </h3><br></br>
                
                <h5 className="display-8">{product.description}</h5>

                <h4 className="display-6 fw-bold my-4">
                   ₹ {product.price}
                </h4>
                <br></br>
                <br></br>

                <button onClick={() => handleCart(product)} className="btn btn-outline-dark px-4 py-2">{cartBtn}</button>
                <NavLink to='/cartbtn' className="btn btn-dark ms-2 px-3 py-2">Go to Cart</NavLink>
                <div>
                <NavLink to='/products'  className="btn btn-outline-primary mt-5">Back to Products</NavLink>
                </div>
              </div>
              
            </>
        )
    }


    const dispatch = useDispatch()
    const handleCart =(product) => {
        if (cartBtn === "Add to Cart"){
            dispatch(addItem(product))
            setCartBtn("Remove from Cart")
        }
        else{
            dispatch(delItem(product))
            setCartBtn("Add to Cart")
        }

    }

    return(
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading/> : <ShowProduct/>}
                </div>
            </div>

        </div>
    )

}

export default Product;