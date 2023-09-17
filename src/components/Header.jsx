import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="row align-items-center px-5" style={{ height: "8vh", background: "#C4E1F6" }}>

            <div className="col h2 project-title">
                SRM
            </div>
            <div className="col text-end ">
                <Link to="/login" className='btn button-style py-1' >Login</Link>
            </div>

        </div>
    )
}

export default Header