import React, { useState } from 'react'
import "./nav.css"
import book_svg from "../../../assets/logo.png";
import { BiMenu } from 'react-icons/bi'
import Navbar from '../toggle_Navbar/Navbar';

const Nav = () => {
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
                
                <div className="nav-heading">
                <img src={book_svg} className="logo_image"/>
                    BOOKS
                </div>
                <div className="button-icon">
                    <BiMenu onClick={toggle}/>
                </div>
            </div>
        </div>
    </div>
    <Navbar toggle={toggle} open={open}/>
</>

  )
}

export default Nav