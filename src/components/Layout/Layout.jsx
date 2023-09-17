import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, childrenHeight }) => {
    return (
        <>
            <div className="container-fluid">
                <Header />
                <div style={{ height: childrenHeight }}>
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout