import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className='container max-w-5xl mx-auto'>
       <NavLink  className=' mx-96  text-2xl'to="https://github.com/jamoldinov"> Jamoldinov || 2023</NavLink>
    </div>
  )
}

export default Footer