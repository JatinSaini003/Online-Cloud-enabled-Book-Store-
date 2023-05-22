import React, { useEffect, useState } from 'react'
import image_svg from "../../assets/undraw_books_re_8gea.svg"
import Carousel from '../carousel/Carousel_3'
import LoginForm from '../Login/Signup/login'
import SignupForm from '../Login/Signup/signup'
import HorizontalScroll from '../New_Arrivals/Arrivals'
import {Routes,Route} from "react-router-dom"
import { Loader } from 'rsuite'
import "./Hero.css"
import axios from 'axios'
const Hero = () => {
  const[list_data,setList_data] = useState([])

  const images=[
    "https://www.bookswagon.com/images/promotionimages/web/ExamWeb.jpg?v=1.6",
    "https://www.bookswagon.com/images/promotionimages/web/BussinessWeb.jpg?v=1.6",
    "https://www.bookswagon.com/images/promotionimages/web/tarotcardWeb.jpg?v=1.6"
  ]


  const baseURL = "http://127.0.0.1:5000/books"
  const fetch_data = async()=>{
    try{
      axios.get(`${baseURL}`).then((response) => {
        setList_data(response.data);
      });
    }catch(err){
      console.error(err)
    }
    console.log(list_data)
  }

  const [load,setLoad] = React.useState(false)
  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
  async function makeRequest() {
    console.log('before');

    await delay(1000);

    console.log('after');
    setLoad(true)
  }

  useEffect(()=>{
    fetch_data()
    makeRequest()
    
  },[])
  
  const Title_list=[
    {title: "Romance"},
    {title: "Kids"},
    {title: "Top Rated"},
    {title: "Fiction"},
    {title: "Sci-Fi"},
    {title:"Spritual"},
    {title:"Horror"}

  ]
 
  return (
    
    <>
    {load?<div className='hero-container'>
        <Carousel images={images}/>
      {Title_list.map((value,key)=>(
        <HorizontalScroll heading={value.title} id={key+1}/>
      ))}
      
        
  </div>:<div className='loader-conatiner'>
  <Loader/>
  </div>
  }
    
  </>
  )
}

export default Hero