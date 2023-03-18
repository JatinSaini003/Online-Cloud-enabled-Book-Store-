import React from 'react'
import image_svg from "../../assets/undraw_books_re_8gea.svg"
import Carousel from '../carousel/Carousel_3'
import LoginForm from '../Login/Signup/login'
import SignupForm from '../Login/Signup/signup'
import HorizontalScroll from '../New_Arrivals/Arrivals'
import {Routes,Route} from "react-router-dom"
import "./Hero.css"
const Hero = () => {
  const images = [
    
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
       
   
    
      "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
       
   
    
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
       
   
    
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
       
   
    
      "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
       
   
    
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
       
   
    
      "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
       
   
    
      "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",

   
    
      "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
      
  ];
  const newArrivals = [
    {
      name: "Product 1",
      price: "$19.99",
      image: "https://picsum.photos/200/300?random=1",
    },
    {
      name: "Product 2",
      price: "$24.99",
      image: "https://picsum.photos/200/300?random=2",
    },
    {
      name: "Product 3",
      price: "$14.99",
      image: "https://picsum.photos/200/300?random=3",
    },
    {
      name: "Product 4",
      price: "$29.99",
      image: "https://picsum.photos/200/300?random=4",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
    {
      name: "Product 5",
      price: "$34.99",
      image: "https://picsum.photos/200/300?random=5",
    },
  ];
  const mockData = [
    {
      id: 1,
      image: "https://picsum.photos/800/400?random=1",
      title: "Product 1",
      subtitle: "Description of product 1",
      link: "/product1",
      rating: 4.5,
      price: 99.99,
      discount:40,
      isNew:true
    },
    {
      id: 2,
      image: "https://picsum.photos/800/400?random=2",
      title: "Product 2",
      subtitle: "Description of product 2",
      link: "/product2",
      rating: 3.2,
      price: 49.99,
      discount:40,
      isNew:true
    },
    {
      id: 3,
      image: "https://picsum.photos/800/400?random=3",
      title: "Product 3",
      subtitle: "Description of product 3",
      link: "/product3",
      rating: 2.7,
      price: 29.99,
      discount:40,
      isNew:true
    },
    {
      id: 4,
      image: "https://picsum.photos/800/400?random=4",
      title: "Product 4",
      subtitle: "Description of product 4",
      link: "/product4",
      rating: 4.9,
      price: 199.99,
      discount:40,
      isNew:true
    },
    {
      id: 5,
      image: "https://picsum.photos/800/400?random=5",
      title: "Product 5",
      subtitle: "Description of product 5",
      link: "/product5",
      rating: 3.8,
      price: 79.99,
      discount:40,
      isNew:true
    },
  ];
  
  return (
    <>
    <div className='hero-container'>
        <Carousel images={images}/>
        <HorizontalScroll heading={"New Arrivals"} id="1"/>
        <HorizontalScroll heading={"New Arrivals"} id="2"/>
        <HorizontalScroll heading={"New Arrivals"} id="3"/>
        <HorizontalScroll heading={"New Arrivals"} id="4"/>
  </div>
  </>
  )
}

export default Hero