import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import LinkButton from '../LinkButton'

const Header = () => {
    return (
        <>
            <div className="d-flex  justify-content-space-between align-items-center  px-3 px-sm-5 customHeaderStyle" >

                <Link to="/">
                    <img className='img-fluid' src={logo} alt='logo' style={{ cursor: 'pointer', height: "120px" }} />

                </Link>


                <div className="flex-fill text-end ">
                    <LinkButton btnText={"Login"} link="/login" />

                </div>


            </div>
        </>






    )
}

export default Header