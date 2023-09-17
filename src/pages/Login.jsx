import React from 'react'
import Layout from "../components/Layout/Layout"
import loginImg from "../assets/login.svg"
import { useState } from 'react'



const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("This feature is not implemented yet..")
    }

    return (
        <Layout childrenHeight="84vh">
            <div className="container-fluid d-flex justify-content-center align-items-center h-100">

                {/* illustration body */}

                <div className='w-50 d-flex justify-content-center align-items-center h-100 ' >
                    <img src={loginImg} alt='login-illustration' />
                </div>

                {/* login form */}

                <div className="w-50 d-flex justify-content-center align-items-center h-100 ">
                    <form onSubmit={handleSubmit} className='p-5 rounded' style={{ border: "2px solid grey" }}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                            />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn button-style">Login</button>
                        </div>
                    </form>

                </div>
            </div>
        </Layout>
    )
}

export default Login