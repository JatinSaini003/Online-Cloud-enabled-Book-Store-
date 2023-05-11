import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Checkout = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const queryParameters = new URLSearchParams(location.search)
    const fetch_url = async()=>{
        const data = {
            "item_list":[
              {
                "book_id":Number(queryParameters.get('book_id')),
                "quantity":1,
                "user_id":queryParameters.get('user_id')
              }
              ]
          }
            
            
        
        await axios.post(`${process.env.REACT_APP_STRIPE_ADDRESS}/create-checkout-session`,data).then((res)=>{
            console.log(res.data)
            setTimeout(()=>{
                window.location.replace(res.data.url)
            },1000)
            
        })
    }
    useEffect(()=>{
        fetch_url()
    })
  return (
    <div>Checkout
        <p>{queryParameters.get("user_id")}</p>
        <p>{queryParameters.get("book_id")}</p>
    </div>
  )
}

export default Checkout