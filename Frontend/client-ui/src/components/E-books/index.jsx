import React from 'react'
import "./style.css"
import image from '../../assets/2.png'
const E_books = () => {
  return (
    <div className='e-container'>
        <div className="coming-img">
            <img src={image} alt="Coming Soon!" className='image-e'/>
        </div>
    </div>
  )
}

export default E_books