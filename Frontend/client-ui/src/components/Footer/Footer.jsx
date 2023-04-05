import React from 'react'
import "./Footer.css"
import { FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaPinterest,FaLinkedin  } from 'react-icons/fa'
const icons = [
    {icon:<FaFacebook/>,link:'#'},
    {icon:<FaTwitter/>,link:'#'},
    {icon:<FaLinkedin/>,link:'#'},
    {icon:<FaPinterest/>,link:'#'},
    {icon:<FaYoutube/>,link:'#'},
    {icon:<FaInstagram/>,link:'#'},
]
const Footer = () => {
  return (
    <div className='Footer-container'>
    <div className='Footer-row-container'>
        <div className="footer-col">
            <div className="footer-heading">
                Company
            </div>
            <div className="footer-items">
                <div className="itemslist">
                    <span>About US</span>
                    <span>Career</span>
                    <span>Blog</span>
                    <span>Contact US</span>
                </div >
            </div>
        </div>
        <div className="footer-col">
            <div className="footer-heading">
                Policies
            </div>
            <div className="footer-items">
                <div className="itemslist">
                    <span>Privacy Policies</span>
                    <span>Terms of Use</span>
                    <span>Secure Shopping</span>
                    <span>Copyright Pospancy</span>
                </div >
            </div>
        </div>
        <div className="footer-col">
            <div className="footer-heading">
                Help
            </div>
            <div className="footer-items">
                <div className="itemslist">
                    <span>Payment</span>
                    <span>Shipping</span>
                    <span>Return</span>
                    <span>FAQ</span>
                </div >
            </div>
        </div>
        <div className="footer-col">
            <div className="footer-heading">
                Misc
            </div>
            <div className="footer-items">
                <div className="itemslist">
                    <span>Affilliate</span>
                    <span>Sitemap</span>
                   
                    
                </div >
            </div>
        </div>
        
    </div>
    <div className="f-s-Icons">
            {icons.map((value,index)=>(
                <div className="icons-f">
                    {value.icon}
                </div>
            ))}
        </div>
        <div className="p-f">
        Copyright © 2023. BOOKS. All Rights Reserved
        </div>
    </div>
  )
}

export default Footer