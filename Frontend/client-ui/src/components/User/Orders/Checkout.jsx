import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Loader } from  'rsuite'

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
            
            
        
        await axios.post(`http://${process.env.REACT_APP_STRIPE_ADDRESS}:3001/create-checkout-session`,data).then((res)=>{
            console.log(res.data)
            setTimeout(()=>{
                window.location.replace(res.data.url)
            },1000)
            
        })
    }
    useEffect(()=>{
        fetch_url()
    },[])
  return (
    <div>
      <div className='loader-conatiner'>
  <Loader/>
  </div>
    </div>
  )
}

export default Checkout