import React from 'react'

import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
function MainLayout() {
  return (
    <>
<header><Navbar/></header>
<main className='flex-grow'><Outlet/></main>
<footer> <Footer/></footer>
    </>
  )
}

export default MainLayout