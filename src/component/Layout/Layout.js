import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function Layout({ children }) {
    return (
        <>
            <div className='main'>

                <Header></Header>
                <div > {children} </div>
                <Footer />
            </div>

        </>
    )
}
