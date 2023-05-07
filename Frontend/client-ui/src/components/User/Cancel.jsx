import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import video_unsuccess from "../../assets/lf20_tl52xzvn.mp4"
const Cancel = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/')
        },2000)
    },[])
  return (
    <div className='videos-container'>

            <video className="video-s" loop muted autoPlay>
                <source src={video_unsuccess} type="video/mp4"></source>
                
            </video>


    </div>
  )
}

export default Cancel