import React from 'react'

const Illustation = ({ heroBanner }) => {
    return (
        <>
            <div className="flex-fill container-fluid d-flex justify-content-center h-100 d-none d-sm-block ">

                <img style={{ maxHeight: "100%" }} className='img-fluid' src={heroBanner} alt="hero-banner" />

            </div>
        </>
    )
}

export default Illustation