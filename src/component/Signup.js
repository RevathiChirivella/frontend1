import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./Loginsignup.css"

const Signup = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:8005/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email, password: password })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
                setEmail('');
                setPassword('');
                if (data.message == "created") {
                    alert("User Registered! Login now")
                    history.push('/login')
                }
                // else (data.message == "User with this email already exists") {
                //      alert("This Email is already Registered")
                //      history.push('/login')
                // }


            })
            .catch(error => console.error(error));
    }




    return (
        <div className="div1">
            <div className="register mt-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <div className="dark p-3 mb-5 bg-body-tertiary rounded">
                    <div className="vox" style={{ textAlign: "center" }} >
                        <h3 >Register</h3>
                        <br></br>
                        <input type="text" class="form-control" name="email" value={email} placeholder="Your Email" onChange={(event) => setEmail(event.target.value)}></input>
                        <br></br>
                        <input type="password" class="form-control" name="password" value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)} required></input>
                        <br></br>
                        <button className="btn btn-primary btn-sm" type="submit" onClick={handleSubmit}>Register</button>
                        <br></br><br></br>

                        {/* <p>Already have an Account?<a href="/login">
                            <button className="btn btn-link"> Login Here</button>
                        </a>
                        </p> */}

                        <p>Already have an account? <Link to="/login"> Login here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Signup;
































// import React from 'react';
// import { useState } from "react";
// import axios from 'axios';
// import { NavLink } from 'react-router-dom';


// const Signup = () => {


//     const[ username, setUsername] = useState('');
//     const[ email, setEmail] = useState('');
//     const[ password, setPassword] = useState('');


//     function handlesubmit(event) {
//         event.preventDefault();
//        axios.post(`http://127.0.0.1:8005/user`,
//        {
//         "username":username,
//         "email":email,
//         "password":password


//        }
//        ).then(res=>{
//         console.log(res.data);

//        }).catch(error=>{
//         console.log(error)
//        })
//     };

//     const handleUsername = (event) => {
//         setUsername(event.target.value);
//     };
//     const handleEmail = (event) => {
//         setEmail(event.target.value);
//     }
//     const handlePassword = (event) => {
//         setPassword(event.target.value);
//     }



//     return (
//         <div>
//             <button type="button" className="btn btn-outline-dark mx-3" data-bs-toggle="modal" data-bs-target="#signupModal"><i className="fa fa-user-plus me-1" ></i>
//                 Register
//             </button>

//             {/* <div className="buttons">
//                 <NavLink to="/register" className="btn btn-outline-dark mx-3"><i className="fa fa-user-plus me-1"></i>Register</NavLink>
//             </div> */}



//             <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h1 className="modal-title fs-5" id="exampleModalLabel">Register</h1>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">

//                             <form onSubmit={handlesubmit}>
//                                 <div className="mb-3">
//                                     <label htmlFor="exampleInput" className="form-label">UserName</label>
//                                     <input type="text" className="form-control" id="username" name="firstName" value={username} onChange={(event) => setUsername(event.target.value)} required/>

//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//                                     <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
//                                         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//                                     <input type="password" className="form-control" id="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} required/>
//                                 </div>

//                                 <div className="mb-3 form-check">
//                                     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//                                         <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//                                 </div>
//                                 <button type="submit" className="btn btn-outline-primary w-100 mt-3">Register</button><br></br><br></br>
//                                 <p>Already have an account?  <NavLink to="/login"><b>Login Here</b> </NavLink></p>
//                             </form>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Signup;




