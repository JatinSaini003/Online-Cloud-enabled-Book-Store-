import React from 'react'
import image_svg from "../../assets/undraw_books_re_8gea.svg"
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-wrapper">
            <div className="content-wrapper">
                <div className="content">
                    Once Upon a time there was a Book in a reading mind.
                    
                </div>
                <div className="sub-content">
                        For more. 
                    </div>
            </div>
            <div className="image-wrapper">
                <div className="hero-image">
                        <img src={image_svg} className="svg_image"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero