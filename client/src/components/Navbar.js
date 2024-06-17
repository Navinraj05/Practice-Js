import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
    <ul>
    <li><Link to ="/"> Home </Link></li>
    <li><Link to ="/usestateho"> Usestate </Link></li>
    <li><Link to ="/useeffect"> useeffect </Link></li>
    <li><Link to ="/usememo"> usememo </Link></li>
    <li><Link to ="/useref"> useref </Link></li>
    <li><Link to ="/about"> About </Link></li>
      
      </ul>
    </nav>
  )
}

export default Navbar;