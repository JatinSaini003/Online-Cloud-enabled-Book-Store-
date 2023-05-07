import React, { useState } from 'react'
import "./nav.css"
import book_svg from "../../../assets/logo.png";
import { BiMenu } from 'react-icons/bi'
import Navbar from '../toggle_Navbar/Navbar';
import { Link } from 'react-router-dom';

const Nav = ({login,handleLogin,userdata}) => {
    const[open,setOpen] = useState(false)
    const toggle=()=>{
        setOpen(!open)
        console.log(open)
    }
  return (
    <>
    <div className="nav_div">
        <div className="nav_container">
            <div className="nav-title">
            <Link to="/">
                <div className="nav-heading">
                    
                <img src={book_svg} className="logo_image"/>
                    BOOKS
                    
                </div>
                </Link>
               
                <div className="button-icon">
                    <BiMenu onClick={toggle}/>
                </div>
            </div>
        </div>
    </div>
    <Navbar toggle={toggle} open={open} login={login} handleLogin={handleLogin} userdata={userdata}/>
</>

  )
}

export default Nav