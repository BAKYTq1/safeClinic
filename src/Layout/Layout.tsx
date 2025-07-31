import React from 'react'
import Header from '../components/Header/Header.tsx'
import { Footer } from '../components/footer/Footer.tsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
