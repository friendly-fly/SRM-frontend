import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, childrenHeight }) => {
    return (
        <>
            <Header />
            <div style={{ height: childrenHeight }}>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout