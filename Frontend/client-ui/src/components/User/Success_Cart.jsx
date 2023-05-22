import React, { useEffect, useState } from 'react'
import video_success from '../../assets/lf20_evNjeW.mp4'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Success_Cart = ({item_list}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const queryParameters = new URLSearchParams(location.search)
    const current = new Date()
    const [state,setState] = useState(false)
    const [bo_data,setBo_data] = useState(null)
    const id = queryParameters.get('user_id')
    const order_done = async()=>{
        
        

        


    }
    useEffect(()=>{
        let bo_arr = (JSON.parse(window.localStorage.getItem('listdata')))
        const data = {
            "item_list":
              bo_arr.map((b)=>{
                return {
                    "user_id": id,
                    "book_id": b,
                    "status": "ordered",
                    "dod": `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`,
                    "pay_mode": "card"
                }
              })
              
          }
          console.log(data)
          setBo_data(data)
          setBo_data(data)
          setTimeout(()=>{
            console.log(bo_data)
          },1000)
        data.item_list.map((value)=>{
            axios.post(`http://${process.env.REACT_APP_API_ADDRESS}:5000/orders`,value).then((res)=>{
            console.log(res.data)
            if(res.data){
                setState(true)
            }
        })
        })
        
          if(state){
            navigate('/')
        }
    },[])
    return (
        <div className='videos-container'>
            
                {queryParameters.get('user_id')}
                {queryParameters.get('item_list')}
                <video className="video-s" loop muted autoPlay>
                    <source src={video_success} type="video/mp4"></source>
                    Your Browser does not support HTML5 Video!
                </video>
    
    
        </div>
      )
}

export default Success_Cart