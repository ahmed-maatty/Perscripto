import React from 'react'
import { Outlet } from 'react-router'
import Aside from '../../components/Aside'
import NavBar from '../../components/NavBar'

function Layout() {
  return (
    <>
      <NavBar />
      <div>
        <Aside />
        <Outlet />
      </div>
    </>
  )
}

export default Layout