import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="d-flex justify-content-space-between align-items-center  px-3 px-sm-5" style={{ height: "8vh", background: "#C4E1F6" }}>

            <div className="flex-fill h2 project-title ">
                SRM
            </div>
            <div className="flex-fill text-end ">
                <Link to="/login" className='btn button-style py-1' >Login</Link>
            </div>

        </div>
    )
}

export default Header