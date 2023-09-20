import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ btnText, link }) => {
    return (
        <>
            <Link to={link} className='btn button-style' >{btnText}</Link>

        </>
    )
}

export default LinkButton