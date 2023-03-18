import React from 'react'
import Sub_Card from './Sub_Card'
import image from '../../assets/1.jpg'
import './style.css'
const SubCards = () => {
  return (
    <div className='sub-cont'>
        
            <Sub_Card ReactImg={image}/>
    <Sub_Card ReactImg={image}/>
    <Sub_Card ReactImg={image}/>
    
    </div>
  )
}

export default SubCards