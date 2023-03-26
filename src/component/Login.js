import React from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./Loginsignup.css"

const Login = () => {

    const history = useHistory();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [msg, setmsg] = useState('')

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:8003/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: user.email, password: user.password })
        })
        .then(response => response.json())
            .then(data => {
                
                if (data.message == "Logged In Successfully") {
                    alert("Successfully Logged In")
                    history.push('/')
                }
                setmsg(data.message)
                console.log(data.message);
            })
            .catch(error => console.error(error));
    };

    return(
        <div className="div2">
            <div className="login mt-5" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                <div className="dark p-3 mb-5 bg-body-tertiary rounded">
                    <div className="texts" style={{ textAlign: "center" }} >
                        <h3 >Login</h3>
                        <br></br>
                        <div className="input-group flex-nowrap">
                        <input type="text" class="form-control" name="email" value={user.email} placeholder="Your Email" onChange={handleChange}></input>
                        </div>
                        <br></br>
                        <input type="password" class="form-control" name="password" value={user.password} placeholder="Password" onChange={handleChange}></input>
                        <br></br>
                        <button className="btn btn-primary btn-sm" onClick={handleSubmit}>Log In</button>
                        <br/>{msg && (<p>{msg}<br/></p>)}
                        <br></br>
                        {/* <div>New here?<a href="/signup">
                            <button className="btn btn-link"> Register</button> */}
                        {/* </a></div> */}
                        <p>Don't have an account? <Link to="/signup"> Register here</Link></p>
                        </div>
                    </div>
                </div>
            </div>

        
        
    )
}

export default Login;


































// import { React, useState } from "react";
// import axios from 'axios';
// import { NavLink } from "react-router-dom";


// const Login = () => {


//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');



//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const response = await axios.post(`http://127.0.0.1:8003/loginuser`,
//             {
//                 "username": username,
//                 "password": password
//             });
//         localStorage.setItem('token', response.data.token);
//         if (response == 403) {
//             console.log("Incorrect username or password");
//         }
//         else {
//             console.log("successfully logged in");
//         }
//         window.location.href = '/';


//     };

//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value);
//     };
//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     }



//     return (
//         <>

//             <button type="button" className="btn btn-outline-dark ms-5" data-bs-toggle="modal" data-bs-target="#loginModal" ><i className="fa fa-sign-in me-1"></i>
//                 Login
//             </button>

//             {/* <div className="buttons">
//                     <NavLink to="/login" className="btn btn-outline-dark ms-5"><i className="fa fa-sign-in me-1"></i>Login</NavLink>
//                 </div> */}



//             <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">

//                             <form className="form" onSubmit={handleSubmit}>
//                                 <div className="mb-3">
//                                     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="userame" value={username} onChange={handleUsernameChange} required />
//                                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                                     <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={password} onChange={handlePasswordChange} required/>
//                                 </div>
//                                 <div className="mb-3 form-check">
//                                     <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//                                     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//                                 </div>
//                                 <button type="submit" className="btn btn-outline-primary w-100 mt-5">Login</button><br></br><br></br>
//                                 {error && <div>{error}</div>}
//                                 <p>Don't have an account? <NavLink to="/register"><b>Register</b></NavLink></p>
//                             </form>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Login;







