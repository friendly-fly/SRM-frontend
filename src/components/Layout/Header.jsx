import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className="d-flex justify-content-space-between align-items-center  px-3 px-sm-5" style={{ height: "8vh", background: "#C4E1F6" }}>

            <div className=" " >
                {/* <div className=" bg-primary " style={{ width: "140px" }}> */}
                <Link to="/" >
                    <img className='img-fluid' src={logo} alt='logo' style={{ cursor: 'pointer', height: "120px" }} />

                </Link>

                {/* </div> */}

            </div>
            <div className="flex-fill text-end ">
                <Link to="/login" className='btn button-style py-1' >Login</Link>


            </div>

        </div>
    )
}

export default Header