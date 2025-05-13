import Footer from '@/component/footer/Footer'
import Header from '@/component/header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>

            <Header />
            <main className='min-h-[80vh]'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
