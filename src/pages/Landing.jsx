import React from 'react'
import heroBanner from "../assets/hero.svg"
import { Link } from 'react-router-dom'

const Landing = () => {



    return (
        <div className="container-fluid " >

            {/* header */}

            <div className="row align-items-center px-5" style={{ height: "8vh", background: "#C4E1F6" }}>

                <div className="col h2 project-title">
                    SRM
                </div>
                <div className="col text-end ">
                    <Link to="/login" className='btn button-style py-1' >Login</Link>
                </div>

            </div>



            {/* content */}


            <div className="row" style={{ height: "84vh" }}>

                {/* content */}

                <div className="col d-flex justify-content-center flex-column p-5" >

                    <p className="h1 text-shadow">
                        Welcome To Student <span className='colored-text'>Relationship</span> Management
                    </p>

                    <p className='text-body-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem explicabo eaque distinctio atque quis illum hic maxime illo veniam. Sequi aut ex distinctio perferendis exercitationem doloremque tempora labore pariatur facere.</p>

                    <div >
                        <Link to="/login" className='btn button-style' >Get Started</Link>
                    </div>
                </div>

                {/* illustratio */}

                <div className="col d-none d-sm-block" style={{ height: "100%" }}>

                    <img style={{ maxHeight: "100%" }} className='img-fluid' src={heroBanner} alt="hero-banner" />

                </div>

            </div>

            <div className="row d-flex align-items-center  footer" style={{ marginTop: "auto", height: "8vh" }}>
                <div className="col text-center ">
                    All right reserved copyright
                    &copy; 2022 - {new Date().getFullYear()}
                </div>
            </div>
        </div>

    )
}

export default Landing