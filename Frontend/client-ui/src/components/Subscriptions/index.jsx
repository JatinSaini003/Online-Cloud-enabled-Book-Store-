import React from 'react'
import Sub_Card from './Sub_Card'
import image from '../../assets/1.jpg'
import './style.css'
const SubCards = () => {
  const data = [
    {"name": "Newbie reader", "price": "99/mo","details":" - 2hr per day reading time and books from slected author",},
    {"name": "Pro reader","details":" - Access to all books and Unlimited reading time","price":"249/mo"},
    {"name": "Pay as you read ","details":" starting with 39rs first hour, continued with 19 rs in next consecutive hours","price":"39/hr"},
  ]
  return (
    <div className='sub-cont'>
        
      {data.map((value)=>(
        <Sub_Card ReactImg={image} name={value.name} Price={value.price} details={value.details}/>
      ))}
    
    </div>
  )
}

export default SubCards