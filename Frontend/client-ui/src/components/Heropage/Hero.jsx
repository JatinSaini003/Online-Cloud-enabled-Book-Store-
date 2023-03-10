import React from 'react'
import image_svg from "../../assets/undraw_books_re_8gea.svg"
import Carousel_c from '../carousel/Carousel'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero-container'>
        <div className="hero-wrapper">
        <Carousel_c/>
        </div>
    </div>
  )
}

export default Hero