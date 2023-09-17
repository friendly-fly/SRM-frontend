import React from 'react'
import heroBanner from "../assets/hero.svg"
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const Landing = () => {



    return (

        <Layout childrenHeight="84vh">

            {/* section */}

            <div className="row container-fluid" >

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

        </Layout>

    )
}

export default Landing