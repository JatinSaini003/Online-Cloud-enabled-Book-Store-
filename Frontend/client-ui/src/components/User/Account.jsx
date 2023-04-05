import React from 'react'
import "./acc-style.css"
import image1 from '../../assets/box.svg'
import image2 from '../../assets/Payment.svg'
import image3 from '../../assets/Help.svg'
import image4 from '../../assets/Cart.svg'
import { Link } from 'react-router-dom'

const data = [
    {img:image1,title:"My Orders" ,link:"/oders/"},
    {img:image4,title:"Cart" ,link:"/cart/"},
    {img:image2,title:"Payments" ,link:"/payments/"},
    {img:image3,title:"Help & Support" ,link:"/help"}
]
const Account = ({props}) => {
    //const id =props.pramas.id
    let id=1
  return (
    <div className='Account-container'>
        <h1 className='Page-title'>
            User's Account
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