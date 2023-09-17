import React from 'react'

const Footer = () => {
    return (
        <div className="row d-flex align-items-center  footer" style={{ marginTop: "auto", height: "8vh" }}>
            <div className="col text-center ">
                All right reserved copyright
                &copy; 2022 - {new Date().getFullYear()}
            </div>
        </div>
    )
}

export default Footer