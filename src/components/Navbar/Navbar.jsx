import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoTimerSharp } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import './Navbar.css'


function Navigation() {
  return (
    <div className="navbar-section">
        <div className="container">   
                <ul>
                <li><Link to="/home" className="nav-icon"><FaHome /></Link></li>
                <li><Link to="/schedule" className="nav-icon"><IoTimerSharp /></Link></li>
                <li><Link to="/addschedule" className="nav-icon"><CiSquarePlus /></Link></li>
                <li><Link to="/settings" className="nav-icon"><IoMdSettings /></Link></li>
                </ul>
        </div>  
    </div>
  )
}

export default Navigation