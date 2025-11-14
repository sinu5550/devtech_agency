import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router'
import ScrollToTop from '../Scroll/ScrollToTop'

const Root = () => {
  return (
    <div>
      <ScrollToTop/>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default Root