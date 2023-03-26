import React, { useEffect, useState } from 'react';
import axios from "axios";
// import { NavLink } from 'react-router-dom';



function Search() {
    
    const [query, setQuery] = useState('');
    const [product, setProduct] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.get(`http://127.0.0.1:8000/search/${query}`);
            
            setProduct(response.data);
            console.log(response.data)
        } catch (error) {
            console.error(error);
            // handle error
        }
    }


   

            


    return (
        
          <div className='col-md-4 product'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='searchitem'>Search</label>
                <input type="text" id='searchitem' value={query} onChange={(event) => setQuery(event.target.value)} />
                <button type="submit">Search</button>
            </form>
            <div>
                {product.map(x=>(
                    <div key={x.id}>
                    <img src={x.image_url} alt={x.name}/>
                    <div>
                        <h2>{x.name}</h2>
                        
                        <p>description:{x.description}</p>
                        <br></br>
                        <button>Price:{x.price}</button>
                    </div>
                    </div>

                ))}
            </div>
        </div>
           
        
    );
}

export default Search;





































// import React from 'react';
// import { useState } from 'react';


// const Search = () => {
//     const [query, setQuery] = useState("");
//     const [results, setResults] = useState([]);

//     const handleSearch = async (e) => {
//         e.preventDefault();
//         if(query.trim() === "") return;
//         const response = await fetch(`http://127.0.0.1:8000/search/${query}`);
//         const data= await response.json();
//         setResults(data.results);
//     }



//     return (
//         <div>
//             {/* <form className="d-flex" role="search">
//                 <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
//                 <button className="btn btn-outline-success mx-6 ms-1" type="submit">Search</button>
//             </form> */}

//             <form onSubmit={handleSearch}>
//                 <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
//                 <button className="btn btn-outline-dark mx-6 ms-1" type="submit">Search</button>
//             </form>

//             {/* {results.length > 0 ? (
//                 <ul>
//                     {results.map((product) => (
//                         <li key={product.id}>
//                             <h3>{product.name}</h3>
//                             <p>{product.description}</p>
//                             <p>{product.price}</p>
                            
                            
//                             </li>)
//                     )}
//                 </ul>

//             ):(
//                 <p>No results found</p> */}
//             {/* )} */}

//             <ul>
//                     {results.map((product) => (
//                         <li key={product.id}>
//                             <h3>{product.name}</h3>
//                             <p>{product.description}</p>
//                             <p>{product.price}</p>
                            
                            
//                             </li>)
//                     )}
//                 </ul>

//         </div>
//     );
// }

// export default Search;