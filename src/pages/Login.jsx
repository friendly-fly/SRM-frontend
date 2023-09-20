import React from 'react'
import Layout from "../components/Layout/Layout"
import loginImg from "../assets/login.svg"
import { useState } from 'react'
import Illustration from "../components/Illustation"



const Login = () => {



    return (
        <Layout childrenHeight="84vh">

            <div className="container-fluid d-flex justify-content-center align-items-center  h-100">
                <LoginContent />
                <Illustration heroBanner={loginImg} />
            </div>

        </Layout>
    )
}

const LoginContent = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("This feature is not implemented yet..")
    }
    return (
        <div className='container-fluid h-100 d-flex align-items-center justify-content-center '>
            <form className='form p-5' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <div className='text-center'>
                    <button type="submit" className="btn button-style">Login</button>
                </div>
            </form>

        </div>
    )
}

export default Login