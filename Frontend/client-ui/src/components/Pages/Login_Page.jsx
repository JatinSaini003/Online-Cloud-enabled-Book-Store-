import React from 'react'
import "./style.css"
import { FaStoreAlt,FaUser,FaArrowRight  } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Login_Page = () => {
  return (
    <div className='login-page-cont'>
        <div className='login-btn-cont'>
        <Link to="/login_customer">
            <div className='login-cust-btn'>
                
                <span className='login-btn-content'>
                <FaUser/>
                Login as a Customer.
                </span>
                <span>
                    <FaArrowRight/>
                </span>
                
            </div>
            </Link>
            <Link to="/login_seller">
            <div className='login-seller-btn'>
                
                <span className='login-btn-content'>
                <FaStoreAlt/>
                Login as a Seller.
                </span>
                <span>
                    <FaArrowRight/>
                </span>
                
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Login_Page