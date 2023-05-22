import React from 'react'
import "./acc-style.css"
import image1 from '../../assets/box.svg'
import image2 from '../../assets/Payment.svg'
import image3 from '../../assets/Help.svg'
import image4 from '../../assets/Cart.svg'
import image5 from '../../assets/add_books.svg'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'


const Account = ({userdata}) => {
    const[state,setState] = useState(false)
    //const id =props.pramas.id
    let {id} = useParams()
    let data = [
        {img:image1,title:"My Orders" ,link:"/orders/"},
        {img:image4,title:"Cart" ,link:"/cart/"},
        {img:image2,title:"Payments" ,link:"/payments/"},
        {img:image3,title:"Help & Support" ,link:"/help"},
        {img:image5,title:"Add Book",link:"/seller/"}
    ]
    const [user,setUser] = useState({})

    useEffect(()=>{
        setUser(JSON.parse(window.localStorage.getItem('userdata')))
    })
    
    
  return (
    <div className='Account-container'>
        <h1 className='Page-title'>
        {String(user.username).replace('_seller','')}'s Account
        </h1>
        <div className="options-rows">
            
                {data.map((value,index)=>(
                    <Link to={`${value.link}${id}`}>
                    <div className="option-items" key={index}>
                    <div className="option-image">
                    <img src={value.img} alt={value.title} className="op-img"/>
                </div>
                <div className="o-title">
                    {value.title}
                </div>
            </div>
            </Link>
                ))}
                
        </div>
    </div>
  )
}

export default Account