import React from 'react'
import "./style.css"
import { FaStoreAlt,FaUser,FaArrowRight  } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup_page = () => {
    return (
        <div className='login-page-cont'>
            <div className='login-btn-cont'>
            <Link to="/signup_customer">
                <div className='login-cust-btn'>
                    
                    <span className='login-btn-content'>
                    <FaUser/>
                    Signup as a Customer.
                    </span>
                    <span>
                        <FaArrowRight/>
                    </span>
                    
                </div>
                </Link>
                <Link to="/signup_seller">
                <div className='login-seller-btn'>
                    
                    <span className='login-btn-content'>
                    <FaStoreAlt/>
                    signup as a Seller.
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

export default Signup_page