import React from 'react'
import heroBanner from "../assets/hero.svg"
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'

const Landing = () => {



    return (

        <Layout childrenHeight="84vh">
            <div className="container-fluid d-flex justify-content-center align-items-center  h-100">
                <LandingPageContent />
                <LandingPageIllustration />
            </div>
        </Layout>

    )
}

export default Landing


const LandingPageContent = () => {
    return (
        <>
            <div className="flex-fill container-fluid d-flex justify-content-center flex-column p-sm-5 p-1">


                <p className="h1 text-shadow" style={{ fontSize: "54px" }}>
                    Welcome To Student <span className='colored-text'>Relationship</span> Management
                </p>

                <p className='text-body-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem explicabo eaque distinctio atque quis illum hic maxime illo veniam. Sequi aut ex distinctio perferendis exercitationem doloremque tempora labore pariatur facere.</p>
                <div >
                    <Link to="/login" className='btn button-style' >Get Started</Link>
                </div>
            </div>

        </>
    )
}

const LandingPageIllustration = () => {
    return (
        <>
            <div className="flex-fill container-fluid d-flex justify-content-center h-100 d-none d-sm-block ">

                <img style={{ maxHeight: "100%" }} className='img-fluid' src={heroBanner} alt="hero-banner" />

            </div>
        </>
    )
}