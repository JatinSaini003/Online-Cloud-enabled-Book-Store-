import React, { useEffect, useState } from 'react'
import video_success from '../../assets/lf20_evNjeW.mp4'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Success = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const queryParameters = new URLSearchParams(location.search)
    const current = new Date()
    const [state,setState] = useState(false)
    const order_done = async()=>{
        const id = queryParameters.get('user_id')
        const book_id = queryParameters.get('book_id')

        const data = {
            "user_id": id,
            "book_id": book_id,
            "status": "ordered",
            "dod": `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`,
            "pay_mode": "card"
        }

        await axios.post(`http://${process.env.REACT_APP_API_ADDRESS}:5000/orders`,data).then((res)=>{
            console.log(res.data)
            if(res.data){
                setState(true)
            }
        })

    }

    useEffect(()=>{
        order_done()
        if(state){
            navigate('/')
        }
    })
  return (
    <div className='videos-container'>

            <video className="video-s" loop muted autoPlay>
                <source src={video_success} type="video/mp4"></source>
                Your Browser does not support HTML5 Video!
            </video>


    </div>
  )
}

export default Success