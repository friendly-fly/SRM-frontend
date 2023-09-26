import React from 'react'
import Layout from '../components/Layout/Layout'

const Register = () => {
  return (
    <Layout childrenHeight="84vh">

      <div className="d-flex justify-content-center align-items-center h-100">

        <div className="form p-5">
          <h3 className='h3 text-center mb-4 loginTitle'>Register</h3>

          <form className='d-flex flex-wrap'>
            <div >
              <div className="m-4">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="m-4">
                <label htmlFor="exampleInputPassword1" className="form-label">User Name</label>
                <input type="text" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="m-4">
                <label htmlFor="exampleInputPassword1" className="form-label">Mobile Number</label>
                <input type="number" className="form-control" id="exampleInputPassword1" />
              </div>
            </div>

            <div>
              <div className="m-4">
                <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="m-4">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="m-4">
                <label htmlFor="exampleInputEmail1" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
            </div>


          </form>
          <div className='d-flex justify-content-center'>
            <button type="submit" className="btn button-style d-block">Register</button>

          </div>


        </div>

      </div>

    </Layout>
  )
}

export default Register

{/* <form style={{ border: "2px solid green" }}>
          <h1 className="h3 mb-3 fw-normal">Register</h1>
          <div className='p-5 d-flex flex-wrap'>
            <div className="form-floating m-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">User name</label>
            </div>
            <div className="form-floating m-3">
              <input type="email" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Email</label>
            </div>
            <div className="form-floating m-3">
              <input type="text" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Full Name</label>
            </div>
            <div className="form-floating m-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating m-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Confirm Password</label>
            </div>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form> */}