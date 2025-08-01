import React from 'react'
import Header from '../../widgets/Header/Header.tsx'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../widgets/Footer/Footer.tsx'

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
